import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { MenuEntity } from './menu.entity';
const providers = [MenuService];
@Module({
  imports: [TypeOrmModule.forFeature([MenuEntity])],
  controllers: [MenuController],
  providers: [...providers],
  exports: [TypeOrmModule, ...providers],
})
export class MenuModule {}
