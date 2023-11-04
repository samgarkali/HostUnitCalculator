import type { CliOptions } from 'dt-app';

const config: CliOptions = {
  environmentUrl: 'https://wvp48792.sprint.apps.dynatracelabs.com/',
  app: {
    name: 'test-app',
    version: '0.0.0',
    description: 'A starting project with routing, fetching data, and charting',
    id: 'my.test.app',
    scopes: [{ name: 'storage:logs:read', comment: 'default template' }, { name: 'storage:buckets:read', comment: 'default template' }, { name: 'environment-api:entities:read', comment: 'default template'}]
  },
};

module.exports = config;