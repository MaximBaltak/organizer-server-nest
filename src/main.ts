import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { cors } from './middleware/cors.middleware';

async function bootstrap(): Promise<string> {
  try {
    const port = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule);
    app.use(cors);
    await app.listen(port);
    return `server connected port: ${port}`;
  } catch (e) {
    return `server no connected ERROR: ${e}`;
  }
}
bootstrap().then((text) => console.log(text));
