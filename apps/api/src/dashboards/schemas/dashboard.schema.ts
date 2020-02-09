import * as mongoose from 'mongoose';

export const DashboardSchema = new mongoose.Schema({
  title: String,
  widgets: Array,
});
