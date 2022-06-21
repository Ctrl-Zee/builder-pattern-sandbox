import { GuidKeyBase } from './guid-key-base';
import { Organization } from './organization';
export interface User extends GuidKeyBase {
  username: string;
  firstName: string;
  middleName: string;
  lastName: string;
  prefix: string;
  suffix: string;
  email: string;
  phoneNbr: string;
  externalGuid: string | null;
  organizationId: string | null;
  organization: Organization;
}
