import { GuidKeyBase } from './guid-key-base';
export interface Permission extends GuidKeyBase {
  name: string;
  description: string;
  sortOrder: number;
}
