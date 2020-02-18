import * as mongoose from 'mongoose';

const ConfigSchema = new mongoose.Schema({}, { strict: false });

export const WidgetSchema = new mongoose.Schema({
  title: String,
  type: String,
  size: Number,
  config: ConfigSchema,
}, { strict : false });

export const DashboardSchema = new mongoose.Schema({
  uri: String,
  title: String,
  theme: ConfigSchema,
  widgets: [WidgetSchema],
});
