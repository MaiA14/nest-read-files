import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CsvController } from './files/file.controller';
import { FileService } from './files/file.service';

@Module({
  imports: [],
  controllers: [AppController, CsvController],
  providers: [AppService, FileService],
})
export class AppModule {}
