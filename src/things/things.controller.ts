import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThingsService } from './things.service';


@Controller('things')
export class ThingsController {
  constructor(private readonly thingsService: ThingsService) { }

  @Post()
  create(@Body() createThingDto) {
    return this.thingsService.create(createThingDto);
  }

  @Get()
  findAll() {
    return this.thingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThingDto) {
    return this.thingsService.update(+id, updateThingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thingsService.remove(+id);
  }
}
