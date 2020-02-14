import * as mongoose from 'mongoose';

const FilerSchema = new mongoose.Schema({}, { strict: false });

export const DataQuerySchema = new mongoose.Schema({
  uri: String,
  filter: Object,
  type: String,
});
