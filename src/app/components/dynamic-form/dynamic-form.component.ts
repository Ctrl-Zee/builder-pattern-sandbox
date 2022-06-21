import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TreatmentElementComponent } from 'src/app/models/treatment-element-component';
import { TreatmentPlanElementSection } from 'src/app/models/treatment-plan-element-section';
import { FormControlService } from 'src/app/services/form-control.service';
import { TreatmentPlanElementService } from 'src/app/services/treatment-plan-element.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() sections!: TreatmentPlanElementSection; // todo make this take an array
  treatmentPlanForm!: FormGroup;

  // sections$ = this.tpeService.sections$;
  // sections!: TreatmentPlanElementSection;
  constructor(
    private tpeService: TreatmentPlanElementService,
    private formControlService: FormControlService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.treatmentPlanForm = this.formControlService.toFormGroup(
      this.sections.components ?? []
    );

    // Create form with a empty form array called sections
    // This will be used to store the form groups created when we loop though the sections$ data
    // this.treatmentPlanForm = this.formBuilder.group({
    //   sections: this.formBuilder.array([]),
    // });

    // TEMP: Don't subscribe in component
    // Loop though the sections inside sections$ and build the form groups
    // this.tpeService.sections$.subscribe((data) => {
    //   this.sections = data[0]; // only get the first array element for now
    //   console.log(this.sections);
    //   this.treatmentPlanForm = this.formControlService.toFormGroup(
    //     this.sections.components ?? []
    //   );

    // const sectionsArray = this.treatmentPlanForm.controls[
    //   'sections'
    // ] as FormArray;

    // // loop though each section
    // this.sections.forEach((section) => {
    //   let length = sectionsArray.length ?? 0; // get last index of the array
    //   // Insert
    //   sectionsArray.insert(
    //     length,
    //     this.formControlService.toFormGroup(section.components ?? []) // create form group from the element components
    //   );
    // });

    // console.log(sectionsArray.controls);
    // });
  }
}
