import * as mongoose from 'mongoose';

export const ArtistSchema = new mongoose.Schema({
  name: String,
  genre: String,
  keywords: [String],
  spotifyUri: String,
  imageUrl: String,
  popularity: Number,
  followers: Number,
  country: String,
});
