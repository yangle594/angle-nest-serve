import { Column, Entity } from 'typeorm';
import { CommonEntity } from '~/common/entity/common.entity';
@Entity({ name: 'sys_menu' })
export class MenuEntity extends CommonEntity {
  @Column({ name: 'component', nullable: true })
  component: string;

  @Column()
  createBy: string;

  @Column()
  hideSider: boolean;

  @Column({ nullable: true, default: '' })
  icon: string;

  @Column({ name: 'keep_alive', type: 'tinyint', default: 0 })
  keepAlive: number;

  @Column({ name: 'is_frame', type: 'tinyint', default: 0 })
  isFrame: number;

  @Column()
  @Column({ name: 'is_system', type: 'tinyint', default: 0 })
  isSystem: number;

  @Column()
  menuName: string;

  @Column({ type: 'tinyint', default: 0 })
  type: string;

  @Column({ name: 'order_no', type: 'int', nullable: true, default: 0 })
  orderNo: number;

  @Column({ name: 'parent_id', nullable: true })
  parentId: number;

  @Column()
  parentName: string;

  @Column({ nullable: true })
  path: string;

  @Column({ nullable: true })
  permission: string;

  @Column()
  query: string;

  @Column()
  remark: string;

  @Column({ type: 'tinyint', default: 1 })
  status: number;

  @Column()
  updateBy: string;

  @Column({ type: 'tinyint', default: 1 })
  show: number;
}
