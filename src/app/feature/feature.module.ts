import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureRootComponent} from './feature-root/feature-root.component';
import {
  FeatureSpecificComponent
} from './feature-root/features-specific-container/feature-specific/feature-specific.component';
import {RouterModule} from '@angular/router';
import {
  FeaturesSpecificContainerComponent
} from './feature-root/features-specific-container/features-specific-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeatureRootComponent
      }
    ])
  ],
  declarations: [
    FeatureRootComponent,
    FeatureSpecificComponent,
    FeaturesSpecificContainerComponent
  ]
})
export class FeatureModule {
}
