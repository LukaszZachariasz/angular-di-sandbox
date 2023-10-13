import {Component, inject, Injector, OnInit, Optional} from '@angular/core';
import {WelcomeService} from './core/welcome/welcome.service';
import {UltraWelcomeService} from './core/welcome/ultra-welcome.service';
import {USER_TRACKING_PROVIDERS} from './user-tracking/user-tracking';
import {ClickTrackingService} from './user-tracking/click-tracking.service';
import {KeyboardTrackingService} from './user-tracking/keyboard-tracking.service';
import {legacyWelcomeService} from './core/welcome/legacy-welcome.service';
import {APP_CONFIG_TOKEN} from './core/config/config';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html',
  providers: [
    // {
    //   provide: WelcomeService,
    //   useClass: UltraWelcomeService
    // },
    //
    // {
    //   provide: WelcomeService,
    //   useExisting: UltraWelcomeService
    // },
    //
    // {
    //   provide: WelcomeService,
    //   useValue: legacyWelcomeService()
    // },
    //
    // {
    //   provide: WelcomeService,
    //
    //   useFactory: () => {
    //     return inject(APP_CONFIG_TOKEN).ultraFeaturesEnabled
    //       ? inject(UltraWelcomeService)
    //       : inject(WelcomeService)
    //   }
    // },
    {
      provide: USER_TRACKING_PROVIDERS,
      useClass: ClickTrackingService,
      multi: true
    },
    {
      provide: USER_TRACKING_PROVIDERS,
      useClass: KeyboardTrackingService,
      multi: true
    }
  ]
})

/**
 *  Ultra urgent tasks:
 *  1. Override WelcomeService by UltraWelcomeService
 *
 */

export class AppComponent implements OnInit{

  constructor(@Optional() private welcomeService: WelcomeService,
              private ultraWelcomeService: UltraWelcomeService) {

    inject(USER_TRACKING_PROVIDERS);
    // Question - Is welcomeService and ultraWelcomeService the same instance

    // console.log('Instances the same: ', welcomeService === ultraWelcomeService);
  }

  public ngOnInit(): void {
    this.welcomeService?.sayHello('AppComponent');
  }
}
