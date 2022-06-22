import { Component, OnInit } from '@angular/core';
import { TreatmentElementComponent } from 'src/app/models/treatment-element-component';
import { TreatmentPlanElementService } from 'src/app/services/treatment-plan-element.service';

@Component({
  selector: 'app-treatment-plan-element',
  templateUrl: './treatment-plan-element.component.html',
  styleUrls: ['./treatment-plan-element.component.scss'],
})
export class TreatmentPlanElementComponent implements OnInit {
  sections$ = this.treatmentPlanElementService.sections$;

  constructor(private treatmentPlanElementService: TreatmentPlanElementService) {}

  ngOnInit() {}

  onNewValueEvent(component: TreatmentElementComponent) {
    this.treatmentPlanElementService.onFormValueChange(component);
  }
}
