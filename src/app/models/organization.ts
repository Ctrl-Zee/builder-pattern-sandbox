import { GuidKeyBase } from './guid-key-base';
import { Patient } from './patient';
import { User } from './user';
export interface Organization extends GuidKeyBase {
  orgName?: string;
  users?: User[];
  patients?: Patient[];
}
