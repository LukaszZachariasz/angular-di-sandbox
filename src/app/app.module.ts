import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: 'features',
        loadChildren: () => {
          alert('Lazy loading Features in progress...');
          return import('./feature/feature.module').then(m => m.FeatureModule)
        }
      }
    ])
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
