import {Component} from '@angular/core';
import {FeatureMainService} from '../../../feature-core/feature-main.service';

@Component({
  selector: 'app-feature-specific',
  template: '<h1>Hi! I am Feature specific!</h1>'
})
export class FeatureSpecificComponent {
  constructor(private featureMainService: FeatureMainService) {
    this.featureMainService
    .displayFeatureInfo('FeatureSpecificComponent');
  }
}
