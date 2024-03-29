import { Module } from '@nestjs/common';
import { MenuModule } from './menu/menu.module';
import { RouterModule } from '@nestjs/core';
const modules = [MenuModule];
@Module({
  imports: [
    ...modules,
    RouterModule.register([
      {
        path: 'system',
        module: SystemModule,
        children: [...modules],
      },
    ]),
  ],
  exports: [...modules],
})
export class SystemModule {}
