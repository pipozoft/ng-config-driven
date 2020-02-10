import * as mongoose from 'mongoose';

const ConfigSchema = new mongoose.Schema({}, { strict: false });

export const WidgetSchema = new mongoose.Schema({
  title: String,
  type: String,
  config: ConfigSchema,
}, { strict : false });

export const DashboardSchema = new mongoose.Schema({
  title: String,
  widgets: [WidgetSchema],
});