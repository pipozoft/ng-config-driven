import { Document } from 'mongoose';

export interface Dashboard extends Document {
  readonly title: string;
  readonly widgets: any[];
}
