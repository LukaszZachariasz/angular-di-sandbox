import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRootComponent } from './feature-root/feature-root.component';
import { FeatureSpecificComponent } from './feature-root/feature-specific/feature-specific.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: FeatureRootComponent
    }])
  ],
  declarations: [
    FeatureRootComponent,
    FeatureSpecificComponent
  ]
})
export class FeatureModule { }
