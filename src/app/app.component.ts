import {Component} from '@angular/core';
import {WelcomeService} from './shared/welcome.service';

@Component({
  selector: 'app-root',
  template: undefined
})
export class AppComponent {
  constructor(private welcomeService: WelcomeService) {
    this.welcomeFromService();
  }

  public welcomeFromService(): void {
    this.welcomeService.sayHello();
  }
}
