import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


// import dotenv
import "dotenv/config"

// import PORT
const PORT = process.env.PORT

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);

  // Write in log if server runnning
  Logger.log(`Server running on port ${ PORT } `, "Server Running")
}

bootstrap();