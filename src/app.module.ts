import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfig } from './app.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const MONGODB_CONN_URI = AppConfig.MONGODB_CONN_URI;

@Module({
  imports: [UserModule, MongooseModule.forRoot(MONGODB_CONN_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
