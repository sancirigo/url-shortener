import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlController } from 'src/controllers/url.controller';
import { UrlService } from 'src/services/url.service';
import { Url, UrlSchema } from 'src/schemas/url.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:toor@localhost/nest?authSource=admin',
    ),
    MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }]),
  ],
  controllers: [UrlController],
  providers: [UrlService],
})
export class UrlModule {}
