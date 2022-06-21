import { GuidKeyBase } from './guid-key-base';
import { LookupCode } from './lookup-code';
export interface FunctionalCode extends GuidKeyBase{
    treatmentElementId: number | null;
    calculatedCode: string;
    domainId: number | null;
    domain: LookupCode;
    domainConstructId: number | null;
    domainConstruct: LookupCode;
    domainComponentId: number | null;
    domainComponent: LookupCode;
    constructQualifierId: number | null;
    constructQualifier: LookupCode;
    bodyQualifierId: number | null;
    bodyQualifier: LookupCode;
    hasEnvironmentalFactor: boolean | null;
    environmentalFactorId: number | null;
    environmentalFactor: LookupCode;
    environmentalConstructId: number | null;
    environmentalConstruct: LookupCode;
    environmentalComponentId: number | null;
    environmentalComponent: LookupCode;
    environmentalQualifierId: number | null;
    environmentalQualifier: LookupCode;
    medicalNecessityRationaleId: number | null;
    medicalNecessityRationale: LookupCode;
}
