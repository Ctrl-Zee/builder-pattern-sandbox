import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TreatmentElementComponent } from '../models/treatment-element-component';

@Injectable({
  providedIn: 'root',
})
export class FormControlService {
  constructor() {}

  toFormGroup(element: TreatmentElementComponent[]): FormGroup {
    const group: any = {};

    element.forEach((element) => {
      group[element.componentDefinitionId] = element.required
        ? new FormControl(element.textValue || '', Validators.required) // TODO refactor to allow selects
        : new FormControl(element.textValue || '');
    });
    return new FormGroup(group);
  }
}
