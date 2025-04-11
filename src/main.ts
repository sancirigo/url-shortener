import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/modules/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('URL Shortener')
    .setDescription('Shortens your URLs')
    .setVersion('1.0')
    .addTag('url')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
