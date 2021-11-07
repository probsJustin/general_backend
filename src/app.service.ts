import { Injectable } from '@nestjs/common';
import { NestCrawlerService } from 'nest-crawler';



@Injectable()
export class AppService {
  constructor(
    private readonly crawler: NestCrawlerService,
  ) {}


  getHello(): string {
    return 'Hello World!';
  }


public async scrape(targetUrl): Promise<void> {
  return this.crawler.fetch({
    target: targetUrl,
    fetch: {
      title: 'h1',
      content: {
        selector: 'html',
        how: 'html',
      }
    },
  })
}

// {
//   title: 'Example Domain',
//   info: 'http://www.iana.org/domains/example',
//   content: '<div><h1>Example Heading</h1><p>Example Paragraph</p></div>'
// }
}