import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional } from 'class-validator';

export class UpdateSysMenuDto {
  @ApiProperty({
    description: '组件路径',
    minLength: 0,
    maxLength: 200,
    example: '/system/user',
  })
  component: string;

  @ApiProperty({
    description: '创建人',
    required: false,
  })
  @IsOptional()
  createBy: string;

  @ApiProperty({
    description: '一级菜单是否隐藏侧边栏',
    required: false,
    example: 'true',
  })
  @IsOptional()
  hideSider: boolean;

  @ApiProperty({
    description: '菜单图标',
    example: '/icon',
    required: false,
  })
  @IsOptional()
  icon: string;

  @ApiProperty({
    description: '是否缓存（0是 1否）',
    example: '0',
  })
  isCache: string;

  @ApiProperty({
    description: '是否为外链（0是 1否）',
    example: '0',
  })
  isFrame: string;

  @ApiProperty({
    description: '是否系统内置菜单：1：是；0：否',
    example: 0,
    type: 'int',
  })
  @IsIn([0, 1])
  isSystem: number;

  @ApiProperty({
    description: '菜单名称',
    example: '菜单管理',
    minLength: 0,
    maxLength: 50,
  })
  menuName: string;

  @ApiProperty({
    description: '按钮类型（M目录 C菜单 F按钮）',
    minLength: 1,
    maxLength: 200,
    example: 'C',
  })
  menuType: string;

  @ApiProperty({
    description: '显示顺序',
    example: 1,
  })
  orderNo: number;

  @ApiProperty({
    description: '父菜单ID',
    example: 1,
  })
  parentId: number;

  @ApiProperty({
    description: '父菜单名称',
    required: false,
  })
  parentName: string;

  @ApiProperty({
    description: '路由地址',
    minLength: 1,
    maxLength: 200,
    example: '/system/user',
  })
  path: string;

  @ApiProperty({
    description: '权限字符串',
    minLength: 1,
    maxLength: 100,
    example: 'system:user:list',
  })
  perms: string;

  @ApiProperty({
    description: '路由参数',
    example: 'a=1&b=2',
  })
  query: string;

  @ApiProperty({
    description: '备注',
    required: false,
  })
  remark: string;

  @ApiProperty({
    description: '菜单状态（0显示 1隐藏）',
  })
  status: string;

  @ApiProperty({
    description: '修改人',
    required: false,
  })
  updateBy: string;

  @ApiProperty({
    description: '显示状态（0显示 1隐藏）',
    example: '0',
    required: false,
  })
  visible: string;
}
