import { EnvironmentType } from './app/types/common';

const development: EnvironmentType = {
  baseUrl: 'https://project-base-url/api/v1',
  clientId: 'someid',
};

const staging: EnvironmentType = {
  baseUrl: 'https://project-base-url/api/v1',
  clientId: 'someid',
};

const production: EnvironmentType = {
  baseUrl: '',
  clientId: '',
};

let environment: EnvironmentType;
switch (import.meta.env.VITE_APP_ENV) {
  case 'staging':
    environment = staging;
    break;
  case 'production':
    environment = production;
    break;
  default:
    environment = development;
    break;
}

export default environment;
