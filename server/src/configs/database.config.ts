import * as dotenv from 'dotenv';
import { joinStrings } from 'src/helpers/strings';
import { env } from 'src/libs/dotenv.lib';
import { DatabaseType } from 'typeorm';

dotenv.config();

const CONFIG_PREFIX = 'DATABASE';

export const DatabaseConfigs = {
  type: {
    name: joinStrings(['TYPE'], {
      prefix: CONFIG_PREFIX,
      prefixJoin: '_',
    }),
    type: 'string',
    value: (env['DATABASE_TYPE'] || 'postgres') as DatabaseType,
  },
  host: {
    name: joinStrings(['HOST'], {
      prefix: CONFIG_PREFIX,
      prefixJoin: '_',
    }),
    type: 'string',
    value: env['DATABASE_HOST'] || 'localhost',
  },
  port: {
    name: joinStrings(['PORT'], {
      prefix: CONFIG_PREFIX,
      prefixJoin: '_',
    }),
    type: 'number',
    value: parseInt(env['DATABASE_PORT'] || '0'),
  },
  username: {
    name: joinStrings(['USER'], {
      prefix: CONFIG_PREFIX,
      prefixJoin: '_',
    }),
    type: 'string',
    value: env['DATABASE_USER'] || 'NON_USER',
  },
  password: {
    name: joinStrings(['PASSWORD'], {
      prefix: CONFIG_PREFIX,
      prefixJoin: '_',
    }),
    type: 'string',
    value: env['DATABASE_PASSWORD'] || 'NON_PASSWORD',
  },
  name: {
    name: joinStrings(['NAME'], {
      prefix: CONFIG_PREFIX,
      prefixJoin: '_',
    }),
    type: 'string',
    value: env['DATABASE_NAME'] || 'NON_NAME',
  },
};
