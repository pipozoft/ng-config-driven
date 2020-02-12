import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { ArtistsService } from './artists.service';
import { Artist } from './interfaces/artist.interface';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  async create(@Body() createArtistDto: CreateArtistDto) {
    this.artistsService.create(createArtistDto);
  }

  @Get()
  async findAll(): Promise<Artist[]> {
    return this.artistsService.findAll();
  }

  @Get(':id')
  async getDashboard(@Param('id') id: String){
      return await this.artistsService.find(id);
  }
}
