import { IntKeyModelBase } from './int-key-model-base';
export interface LookupCode extends IntKeyModelBase {
  codeName?: string;
  codeDescription?: string;
  abbreviation?: string;
  sortOrder?: number;
  isEnabled?: boolean;
  isUserAdministered?: boolean;
}
