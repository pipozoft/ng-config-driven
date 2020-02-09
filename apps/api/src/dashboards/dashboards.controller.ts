import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { DashboardsService } from './dashboards.service';
import { Dashboard } from './interfaces/dashboard.interface';

@Controller('dashboards')
export class DashboardsController {
  constructor(private readonly dashboardsService: DashboardsService) {}

  @Post()
  async create(@Body() createDashboardDto: CreateDashboardDto) {
    this.dashboardsService.create(createDashboardDto);
  }

  @Get()
  async findAll(): Promise<Dashboard[]> {
    return this.dashboardsService.findAll();
  }
}
