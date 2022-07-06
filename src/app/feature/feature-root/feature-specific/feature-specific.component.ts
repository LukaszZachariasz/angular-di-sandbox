import { Component, OnInit } from '@angular/core';
import {FeatureMainService} from '../../feature-core/feature-main.service';

@Component({
  selector: 'app-feature-specific',
  template: '<h1>Hi! I am Feature specific!</h1>'
})
export class FeatureSpecificComponent implements OnInit{
  constructor(private featureMainService: FeatureMainService) { }

  public ngOnInit(): void {
    this.featureMainService.displayFeatureInfo('FeatureSpecificComponent');
  }
}
