import {InjectionToken} from '@angular/core';

export interface UserTracking {
  track: () => void;
}

export const USER_TRACKING_PROVIDERS = new InjectionToken<UserTracking>('USER_TRACKING_PROVIDERS')
