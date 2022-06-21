import { GuidKeyBase } from './guid-key-base';
import { LookupCode } from './lookup-code';
import { Organization } from './organization';
import { Patient } from './patient';
import { TreatmentElement } from './treatment-element';
import { User } from './user';
export interface TreatmentPlan extends GuidKeyBase {
  organizationId?: string;
  organization?: Organization;
  patientId?: string;
  patient?: Patient;
  userId?: string;
  user?: User;
  treatmentGroupId?: number;
  treatmentGroup?: LookupCode;
  planDate?: Date;
  isComplete: boolean;
  treatmentElements?: TreatmentElement[];
}
