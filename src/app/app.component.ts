import {Component} from '@angular/core';
import {WelcomeService} from './shared/welcome.service';

@Component({
  selector: 'app-root',
  styles: [`
    button {
      border-radius: 10px;
      padding: 10px;
      color: white;
      font-size: 20px;
      background: linear-gradient(to right, #da63da, #6161e8);
      cursor: pointer;
    }`],
  template: `
    <button [routerLink]="'features'"> Load Feature Lazy</button>
    <button [routerLink]="'/'"> Go App Root</button>
    <router-outlet></router-outlet>
  `,
  providers: [
    WelcomeService
  ]
})
export class AppComponent {
  constructor(private welcomeService: WelcomeService) {
    this.welcomeFromService();
  }

  public welcomeFromService(): void {
    this.welcomeService.sayHello('AppComponent');
  }
}
