import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { NewSysMenuDto } from './new-sys-menu.dto.ts';
import { UpdateSysMenuDto } from './update-sys-menu.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('System - 菜单权限模块')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @ApiOperation({ summary: '添加菜单' })
  async create(@Body() dto: NewSysMenuDto) {
    await this.menuService.check(dto);
    if (!dto.parentId) dto.parentId = null;
    await this.menuService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: '获取菜单' })
  findAll() {
    return this.menuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateSysMenuDto) {
    return this.menuService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
