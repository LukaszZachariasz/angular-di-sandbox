import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  sayHello(who: string) {
    alert('Hello Angular! I am: ' + who);
  }
}
