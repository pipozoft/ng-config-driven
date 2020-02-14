import { Document } from 'mongoose';

export interface Dashboard extends Document {
  readonly uri: string;
  readonly title: string;
  readonly widgets: any[];
}
