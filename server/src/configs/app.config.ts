import * as dotenv from 'dotenv';
import { joinStrings } from 'src/helpers/strings';
import { env } from 'src/libs/dotenv.lib';

dotenv.config();

const CONFIG_PREFIX = 'APP';

export const AppConfigs = {
  env: {
    name: joinStrings(['ENV'], {
      prefix: CONFIG_PREFIX,
      prefixJoin: '_',
    }),
    type: 'string',
    value: env.APP_ENV || '',
  },
  port: {
    name: joinStrings(['PORT'], {
      prefix: CONFIG_PREFIX,
      prefixJoin: '_',
    }),
    type: 'number',
    value: env.APP_PORT || 3000,
  },
  prefix: {
    name: joinStrings(['PREFIX'], {
      prefix: CONFIG_PREFIX,
      prefixJoin: '_',
    }),
    type: 'string',
    value: env.APP_PREFIX || '',
  },
  name: {
    name: joinStrings(['NAME'], {
      prefix: CONFIG_PREFIX,
      prefixJoin: '_',
    }),
    type: 'string',
    value: env.APP_NAME || '',
  },
};
