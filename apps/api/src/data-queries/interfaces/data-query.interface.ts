import { Document } from 'mongoose';

export interface Filter {
  query: any;
  sort: any;
}

export interface DataQuery extends Document {
  readonly uri: string;
  readonly filter: Filter;
  readonly type: string;
}
