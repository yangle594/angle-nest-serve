import { Injectable } from '@nestjs/common';
import { NewSysMenuDto } from './new-sys-menu.dto.ts';
import { UpdateSysMenuDto } from './update-sys-menu.dto';
import { ErrorEnum } from '~/constants/error-code.constant';
import { BusinessException } from '~/common/exceptions/biz.exception';
import { Repository } from 'typeorm';
import { MenuEntity } from './menu.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity)
    private menuRepository: Repository<MenuEntity>,
  ) {}
  /**
   * 检查菜单创建规则是否符合
   */
  async check(dto: Partial<NewSysMenuDto>) {
    if (dto.type === 2 && !dto.parentId) {
      // 无法直接创建权限，必须有parent
      throw new BusinessException(ErrorEnum.PERMISSION_REQUIRES_PARENT);
    }
    if (dto.type === 1 && dto.parentId) {
      const parent = await this.getMenuItemInfo(dto.parentId);
      if (parent) {
      }
    }
    return 'This action adds a new menu';
  }
  create(createMenuDto: NewSysMenuDto) {
    return 'This action adds a new menu';
  }

  findAll() {
    return `This action returns all menu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateSysMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
  /**
   * 获取某个菜单的信息
   * @param mid menu id
   */
  async getMenuItemInfo(pid: number) {
    const menu = await this.menuRepository.findOneBy({
      id: pid,
    });
    return menu;
  }
}
