import {Injectable} from '@angular/core';
import {UserTracking} from './user-tracking';

@Injectable()
export class ClickTrackingService implements UserTracking {

  track = () => console.warn('Start clicking tracking')

  constructor() {
    this.track();
  }
}
