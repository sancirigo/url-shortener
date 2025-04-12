import { Module } from '@nestjs/common';
import { UrlModule } from 'src/modules/url.module';

@Module({
  imports: [UrlModule],
})
export class AppModule {}
