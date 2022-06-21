/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TreatmentPlanElementService } from './treatment-plan-element.service';

describe('Service: TreatmentPlanElement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreatmentPlanElementService]
    });
  });

  it('should ...', inject([TreatmentPlanElementService], (service: TreatmentPlanElementService) => {
    expect(service).toBeTruthy();
  }));
});
