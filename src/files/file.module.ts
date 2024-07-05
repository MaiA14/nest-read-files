import { Module } from '@nestjs/common';
import { CsvController } from './file.controller';
import { FileService } from './file.service';

@Module({
  controllers: [CsvController],
  providers: [FileService],
})
export class CsvModule {}
