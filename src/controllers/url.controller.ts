import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { UrlService } from 'src/services/url.service';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Get('shorten')
  async shortenUrl(@Query('url') url: string): Promise<string> {
    return await this.urlService.shortenUrl(url);
  }

  @Get('expand')
  @Redirect('', 302)
  async expandUrl(@Query('url') url: string) {
    return { url: await this.urlService.expandUrl(url) };
  }
}
