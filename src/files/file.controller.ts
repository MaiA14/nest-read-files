import { Controller, Get, Param } from '@nestjs/common';
import { FileService } from './file.service';

@Controller('File')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get(':filePath')
  async getFileData(@Param('filePath') filePath: string): Promise<any[]> {
    try {
      const data = await this.fileService.readFile(filePath);
      return data;
    } catch (error) {
      throw new Error(`Error reading file: ${error.message}`);
    }
  }
}
