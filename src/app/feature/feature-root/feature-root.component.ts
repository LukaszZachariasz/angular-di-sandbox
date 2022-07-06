import {Component} from '@angular/core';
import {FeatureMainService} from '../feature-core/feature-main.service';

@Component({
  selector: 'app-feature-root',
  template: '<app-feature-specific></app-feature-specific>',
  providers: [
    FeatureMainService
  ]
})
export class FeatureRootComponent {
}
