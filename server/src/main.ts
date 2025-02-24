import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { AppConfigs } from 'src/configs';
import { METHODS } from 'http';
import { WinstonModule } from 'nest-winston';
import { loggerInstance } from './libs/wiston-logger.lib';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['*'],
      credentials: true,
      maxAge: 5000,
      methods: METHODS,
    },
    logger: WinstonModule.createLogger({
      instance: loggerInstance,
    }),
  });

  app.setGlobalPrefix(AppConfigs.prefix.value);

  await app.listen(AppConfigs.port.value, () => {
    if (AppConfigs.env.value !== 'p') {
      console.log('Server is running on port: ', AppConfigs.port.value);
    }
  });
}
bootstrap();
