import { style } from '@ogma/styler';
import { AppConfigs } from 'src/configs';
import { joinStrings } from 'src/helpers/strings';
import { createLogger, format, transports } from 'winston';

const customFormat = format.printf(({ timestamp, level, stack, message }) => {
  return joinStrings(
    [
      style.green.apply(`[ ${String(timestamp)} ]`),
      `${style.blue.apply(level.toUpperCase())} : ${String(stack || message)}`,
    ],
    {
      joinBy: ' | ',
      prefix: AppConfigs.name.value
        ? style.bMagenta.apply(`[ ${AppConfigs.name.value.toLocaleUpperCase()} ]`)
        : '',
      prefixJoin: AppConfigs.name.value ? '_' : '',
    },
  );
});

const options = {
  file: {
    filename: 'error.log',
    level: 'error',
  },
  console: {
    level: 'silly',
    colorize: true,
  },
};

const devLogger = {
  format: format.combine(format.timestamp(), format.errors({ stack: true }), customFormat),
  transports: [new transports.Console(options.console)],
};

const prodLogger = {
  format: format.combine(format.timestamp(), format.errors({ stack: true }), format.json()),
  transports: [
    new transports.File(options.file),
    new transports.File({
      filename: 'combine.log',
      level: 'info',
    }),
  ],
};

const instanceLogger = AppConfigs.env.value === 'p' ? prodLogger : devLogger;

export const loggerInstance = createLogger(instanceLogger);
