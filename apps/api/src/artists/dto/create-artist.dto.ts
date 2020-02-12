export class CreateArtistDto {
  readonly name: string;
  readonly genre: string;
  readonly keywords: string[];
  readonly spotifyUri: string;
  readonly imageUrl: string;
  readonly popularity: number;
  readonly followers: number;
  readonly country: string;
}
