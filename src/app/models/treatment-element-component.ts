import { ElementComponentDefinition } from './element-component-definition';
import { GuidKeyBase } from './guid-key-base';
export interface TreatmentElementComponent extends GuidKeyBase {
  treatmentPlanElementId: string; // remove nullable
  componentDefinitionId: number;
  componentDefinition?: ElementComponentDefinition; // I don't like that this is nullable
  sectionId?: number;
  singleSelectionValue?: number;
  textValue?: string;
  multiSelectValue?: string;
  sortOrder?: number;
  required: boolean; // This would be helpful to have in the BHI project
}
