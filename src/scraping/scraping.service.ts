import { Injectable, Logger } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';
const execPromise = promisify(exec);

@Injectable()
export class ScrapingService {
  private readonly logger = new Logger(ScrapingService.name);

  async scrapeWebsite(url: string): Promise<any> {
    try {
      const { stdout } = await execPromise(`python3 scripts/scrape.py ${url}`);
      const data = JSON.parse(stdout);
      this.logger.log(`Scraped data from ${url}`);
      return data;
    } catch (error: any) {
      this.logger.error(`Scraping failed: ${error.message}`);
      throw error;
    }
  }
}