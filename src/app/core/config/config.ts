import {InjectionToken} from '@angular/core';

export interface Config {
  ultraFeaturesEnabled: boolean;
}

export const APP_CONFIG_TOKEN = new InjectionToken<Config>('APP_CONFIG_TOKEN', {
  providedIn: 'root',

  factory: (): Config => ({
    ultraFeaturesEnabled: true
  })
});
