import {Component} from '@angular/core';
import {FeatureMainService} from '../feature-core/feature-main.service';

@Component({
  selector: 'app-feature-root',
  template: '<app-features-specific-container></app-features-specific-container>',
  providers: [FeatureMainService]
})
export class FeatureRootComponent {}
