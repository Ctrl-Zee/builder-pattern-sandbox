import { Injectable } from '@angular/core';
import { TreatmentElementComponent } from '../models/treatment-element-component';
import { TreatmentPlanElementSection } from '../models/treatment-plan-element-section';
import { Guid } from 'guid-typescript';
import { of } from 'rxjs';
import { FormControlService } from './form-control.service';

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

  sections$ = of(this.section);

  constructor() {}
}
