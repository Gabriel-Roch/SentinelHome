import { Module } from '@nestjs/common';
import { MySQLModule } from './mysql.module';
import { UserModule } from './user.module';
import { HomeModule } from './home.module';
import { ResidentModule } from './resident.module';
import { ContactModule } from './contact.module';
import { DeviceModule } from './device.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
      isGlobal : true
    }),
    MySQLModule,
    UserModule,
    HomeModule,
    ResidentModule,
    ContactModule,
    DeviceModule
  ]
})
export class AppModule { }
