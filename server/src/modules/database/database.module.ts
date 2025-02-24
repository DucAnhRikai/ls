import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppConfigs } from 'src/configs';
import { DatabaseConfigs } from 'src/configs/database.config';

@Module({
  imports: TypeOrmModule.forRoot({
    type: DatabaseConfigs.type.value,
    host: DatabaseConfigs.host.value,
    port: DatabaseConfigs.port.value,
    username: DatabaseConfigs.username.value,
    password: DatabaseConfigs.password.value,
    database: DatabaseConfigs.name.value,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: AppConfigs.env.value === 'd',
  } as TypeOrmModuleOptions).imports,
})
export class DatabaseModule {}
