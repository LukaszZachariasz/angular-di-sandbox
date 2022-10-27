import {Injectable} from '@angular/core';
import {Welcome} from './welcome';

@Injectable()
export class WelcomeService implements Welcome {
  public static instanceCounter = 0;

  public instanceNo = ++WelcomeService.instanceCounter

  constructor() {
    console.table([{title: 'WelcomeService', instances: this.instanceNo}]);
  }

  sayHello(who: string) {
    alert('Hello Angular! I am: ' + who);
  }
}
