import { FunctionalCode } from './functional-code';
import { GuidKeyBase } from './guid-key-base';
import { LookupCode } from './lookup-code';
import { TreatmentElementComponent } from './treatment-element-component';
import { TreatmentPlanElementSection } from './treatment-plan-element-section';
export interface TreatmentElement extends GuidKeyBase {
  treatmentPlanId?: string;
  treatmentGroupId?: number;
  treatmentGroup?: LookupCode;
  isComplete: boolean;
  medicalNecessityId?: number;
  medicalNecessity?: LookupCode;
  sections?: TreatmentPlanElementSection[];
  functionalCodes?: FunctionalCode[];
  sortOrder?: number;
}
