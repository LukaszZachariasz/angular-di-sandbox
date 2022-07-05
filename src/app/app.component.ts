import { Component } from '@angular/core';
import {WelcomeService} from './shared/welcome.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private welcomeService: WelcomeService) {
    welcomeService.sayHello();
  }
}
