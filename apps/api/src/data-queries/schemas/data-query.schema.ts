import * as mongoose from 'mongoose';

export const DataQuerySchema = new mongoose.Schema({
  uri: String,
  query: String,
  type: String,
});
