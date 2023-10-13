import {Injectable} from '@angular/core';
import {UserTracking} from './user-tracking';

@Injectable()
export class KeyboardTrackingService implements UserTracking {

  track = () => console.warn('Start keyboard tracking')

  constructor() {
    this.track();
  }
}
