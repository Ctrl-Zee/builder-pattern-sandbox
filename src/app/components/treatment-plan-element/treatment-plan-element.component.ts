import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TreatmentElementComponent } from 'src/app/models/treatment-element-component';
import { TreatmentPlanElementSection } from 'src/app/models/treatment-plan-element-section';
import { FormControlService } from 'src/app/services/form-control.service';
import { TreatmentPlanElementService } from 'src/app/services/treatment-plan-element.service';

@Component({
  selector: 'app-treatment-plan-element',
  templateUrl: './treatment-plan-element.component.html',
  styleUrls: ['./treatment-plan-element.component.scss'],
})
export class TreatmentPlanElementComponent implements OnInit {
  sections$ = this.tpeService.sections$;

  constructor(private tpeService: TreatmentPlanElementService) {}

  ngOnInit() {}
}
