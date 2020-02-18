import { Document } from 'mongoose';

export interface Dashboard extends Document {
  readonly uri: string;
  readonly title: string;
  readonly theme: any;
  readonly widgets: any[];
}
