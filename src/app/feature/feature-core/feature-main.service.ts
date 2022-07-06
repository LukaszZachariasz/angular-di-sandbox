import { Injectable } from '@angular/core';

@Injectable()
export class FeatureMainService {

  public displayFeatureInfo(featureName: string): void {
    alert('Some info about: ' + featureName);
  }
}
