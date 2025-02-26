import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileController } from './files/file.controller';
import { FileService } from './files/file.service';

@Module({
  imports: [],
  controllers: [AppController, FileController],
  providers: [AppService, FileService],
})
export class AppModule {}
