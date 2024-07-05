import { Injectable } from '@nestjs/common';
import * as csvParser from 'csv-parser';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileService {
  async readFile(fileName: string): Promise<any[]> {
    const filePath = path.join(__dirname, '..', 'files_samples', fileName); 
    const fileExtension = path.extname(filePath).toLowerCase();
    if (fileExtension === '.csv') {
      return this.readCsv(filePath);
    } else if (fileExtension === '.json') {
      return this.readJson(filePath);
    } else {
      throw new Error(`Unsupported file type: ${fileExtension}`);
    }
  }

  private readCsv(filePath: string): Promise<any[]> {
    const results = [];
    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', () => {
          resolve(results);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  private readJson(filePath: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          try {
            const jsonData = JSON.parse(data);
            resolve(jsonData);
          } catch (error) {
            reject(error);
          }
        }
      });
    });
  }
}
