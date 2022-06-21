import { LookupCode } from './lookup-code';
import { TreatmentElementComponent } from './treatment-element-component';
export interface TreatmentPlanElementSection extends LookupCode {
 components?: TreatmentElementComponent[];
}
