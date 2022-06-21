import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TreatmentPlanElementSection } from 'src/app/models/treatment-plan-element-section';
import { FormControlService } from 'src/app/services/form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() sections!: TreatmentPlanElementSection[];
  treatmentPlanForm!: FormGroup;

  constructor(
    private formControlService: FormControlService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // Create form with a empty form array called sections
    // This will be used to store the form groups created when we loop though the sections$ data
    this.treatmentPlanForm = this.formBuilder.group({
      sectionGroups: this.formBuilder.array([]),
    });

    // loop though each section
    this.sections.forEach((section) => {
      this.sectionGroupList.push(
        this.formControlService.toFormGroup(section.components ?? []) // create form group from the element components
      );
    });

    console.log(this.treatmentPlanForm);
    console.log(this.sectionGroupList.controls);
    console.log(this.sections);
  }

  buildFormArray(): FormGroup[] {
    const formGroupArray: FormGroup[] = [];
    this.sections.forEach((section) => {
      let length = this.sectionGroupList.length ?? 0; // get last index of the array
      // Insert
      formGroupArray.push(
        this.formControlService.toFormGroup(section.components ?? []) // create form group from the element components
      );
    });

    return formGroupArray;
  }

  get sectionGroupList(): FormArray {
    return <FormArray>this.treatmentPlanForm.get('sectionGroups');
  }
}
