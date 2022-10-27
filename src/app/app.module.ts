import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {PossessionModule} from './posession/possession.module';
import {CommonModule} from '@angular/common';
import {WelcomeService} from './core/welcome/welcome.service';

export const APP_ROUTES: Route[] = [
  {
    path: 'features',
    loadChildren: () => {
      alert('Lazy loading Features in progress...');
      return import('./feature/feature.module').then(m => m.FeatureModule)
    }
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    PossessionModule,

    RouterModule.forRoot(APP_ROUTES)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
