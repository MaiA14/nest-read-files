import { Controller, Get, Param } from '@nestjs/common';
import { FileService } from './file.service';

@Controller('csv')
export class CsvController {
  constructor(private readonly csvService: FileService) {}

  @Get(':filePath')
  async getCsvData(@Param('filePath') filePath: string): Promise<any[]> {
    try {
      const data = await this.csvService.readFile(filePath);
      return data;
    } catch (error) {
      throw new Error(`Error reading CSV file: ${error.message}`);
    }
  }
}
