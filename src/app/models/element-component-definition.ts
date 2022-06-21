import { IntKeyModelBase } from './int-key-model-base';
import { LookupCode } from './lookup-code';
export interface ElementComponentDefinition extends IntKeyModelBase {
  helpText?: string;
  controlTypeId?: number;
  controlType?: LookupCode;
  label?: string;
  valueTypeId?: number;
  valueType?: LookupCode;
  labelTypeId?: number;
}
