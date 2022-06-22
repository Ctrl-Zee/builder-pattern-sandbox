import { Injectable } from '@angular/core';
import { TreatmentElementComponent } from '../models/treatment-element-component';
import { TreatmentPlanElementSection } from '../models/treatment-plan-element-section';
import { Guid } from 'guid-typescript';
import { concatMap, merge, Observable, of, scan, Subject, tap } from 'rxjs';
import { Action } from '../models/action';

enum ControlTypes {
  richTextBox = 1,
  radioGroup = 2,
}

@Injectable({
  providedIn: 'root',
})
export class TreatmentPlanElementService {
  section: TreatmentPlanElementSection[] = [
    {
      id: 1,
      codeDescription: 'Current State/Baseline',
      sortOrder: 1,
      components: [
        {
          id: Guid.create().toString(),
          treatmentPlanElementId: Guid.create().toString(),
          componentDefinitionId: 1,
          componentDefinition: {
            id: 98,
            controlTypeId: ControlTypes.richTextBox,
          },
          textValue: 'Test 1',
          sectionId: 1,
          sortOrder: 1,
          required: false,
        },
        {
          id: Guid.create().toString(),
          treatmentPlanElementId: Guid.create().toString(),
          componentDefinitionId: 2,
          componentDefinition: {
            id: 99,
            controlTypeId: ControlTypes.richTextBox,
          },
          textValue: 'Test 2',
          sectionId: 1,
          sortOrder: 2,
          required: false,
        },
      ],
    },
    {
      id: 2,
      codeDescription: 'Objective/Future State Goal',
      sortOrder: 2,
      components: [
        {
          id: Guid.create().toString(),
          treatmentPlanElementId: Guid.create().toString(),
          componentDefinitionId: 3,
          componentDefinition: {
            id: 97,
            controlTypeId: ControlTypes.richTextBox,
          },
          textValue: 'Test 3',
          sectionId: 2,
          sortOrder: 1,
          required: false,
        },
        {
          id: Guid.create().toString(),
          treatmentPlanElementId: Guid.create().toString(),
          componentDefinitionId: 4,
          componentDefinition: {
            id: 96,
            controlTypeId: ControlTypes.richTextBox,
          },
          textValue: 'Test 4',
          sectionId: 2,
          sortOrder: 2,
          required: false,
        },
      ],
    },
  ];

  sectionsSource$ = of(this.section);

  private elementModifiedActionSubject = new Subject<Action<TreatmentElementComponent>>();
  elementModifiedAction$ = this.elementModifiedActionSubject.asObservable();

  // TODO: Call the processAction method to save the data.
  sections$ = merge(this.sectionsSource$, this.elementModifiedAction$).pipe(
    scan((acc, value) => (value instanceof Array ? [...value] : this.modifyStream(acc, value)), [] as TreatmentPlanElementSection[]),
    tap((data) => console.log(data)) // * This will show the modified section$ stream
  );

  constructor() {}

  /**
   * Modifies a source stream based on an action.
   * @param sections
   * @param operation
   * @returns A modified TreatmentPlanElementSection array based on the action stream
   */
  modifyStream(sections: TreatmentPlanElementSection[], operation: Action<TreatmentElementComponent>): TreatmentPlanElementSection[] {
    const updatedSection = this.updateSection(sections, operation.item); // get updated section to use for all CRUD operations
    if (operation!.action === 'update') {
      return sections.map((section) => (section.id === updatedSection.id ? section : section));
    }
    return [...sections];
  }

  processAction(elementComponentAction: Action<TreatmentElementComponent>): Observable<Action<TreatmentElementComponent>> {
    switch (elementComponentAction.action) {
      case 'update':
        // TODO Make a call to the API to save the data and return the updated object
        return of({} as Action<TreatmentElementComponent>);
      default:
        return of({} as Action<TreatmentElementComponent>);
    }
  }

  /**
   * Find and update the section object with the new TreatmentElementComponent
   * @param sections
   * @param elementComponent
   * @returns A TreatmentPlanElementSection with the updated component
   */
  updateSection(sections: TreatmentPlanElementSection[], elementComponent: TreatmentElementComponent): TreatmentPlanElementSection {
    const section = sections.filter((section) => section.id === elementComponent.sectionId)[0]; // need to take first element so we don't have an array
    const elementIndex = section.components?.findIndex((c) => c.id === elementComponent.id) ?? 0;
    section.components[elementIndex] = elementComponent;
    return section;
  }

  /** Single point of entry to call the subjects next method */
  onFormValueChange(component: TreatmentElementComponent) {
    this.elementModifiedActionSubject.next({ item: component, action: 'update' });
  }
}
