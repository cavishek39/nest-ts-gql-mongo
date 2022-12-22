import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 3000;

async function bootstrap() {
  console.log(
    `Listen on port ${PORT} or mongo conn string: ${process.env.MONO_DB_CONNECTION_STRING}`,
  );
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
