import { Document } from 'mongoose';

export interface DataQuery extends Document {
  readonly uri: string;
  readonly query: string;
  readonly type: string;
}
