import { Injectable } from '@angular/core';

@Injectable()
export class FeatureMainService {

  constructor() {
    alert('FeatureMainService instantiated');
  }

  public displayFeatureInfo(featureName: string): void {
    alert('Some info about: ' + featureName);
  }
}
