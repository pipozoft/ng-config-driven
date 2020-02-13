import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
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
  async findAll(@Query('query') query): Promise<Artist[]> {
    const q = query ? JSON.parse(query) : {};
    return this.artistsService.findAll(q);
  }

  @Get(':id')
  async getDashboard(@Param('id') id: String){
      return await this.artistsService.find(id);
  }

  @Post('/aggregate')
  async aggregate(@Body() query): Promise<Artist[]> {
    console.log(query);
    return this.artistsService.aggregate(query);
  }

  @Post('/names')
  async names(): Promise<Artist[]> {
    return this.artistsService.distintNames();
  }
}
