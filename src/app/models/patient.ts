import { GuidKeyBase } from './guid-key-base';
import { TreatmentPlan } from './treatment-plan';
export interface Patient extends GuidKeyBase {
  organizationId?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  prefix?: string;
  suffix?: string;
  treatmentPlans?: TreatmentPlan[];
}
