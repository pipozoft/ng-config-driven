import { Document } from 'mongoose';
import { Filter } from '@ng-config-driven/api-interfaces'

export interface DataQuery extends Document {
  readonly uri: string;
  readonly filter: Filter;
  readonly type: string;
}
