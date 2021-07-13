import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: ['http://api:3000', 'http://localhost:3010'],
        credentials: true,
    });
    await app.listen(3000);
}
bootstrap();
