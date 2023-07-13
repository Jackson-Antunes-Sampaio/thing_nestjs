import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators/core';
import { Prisma } from '@prisma/client';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CategoriesService } from './categories.service';


@UseGuards(AuthGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }


  @Post()
  create(@Body() createCategoryDto: Prisma.CategoryCreateInput) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: Prisma.CategoryCreateInput) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
