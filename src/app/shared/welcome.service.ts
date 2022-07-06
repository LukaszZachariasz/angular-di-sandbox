import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  sayHello() {
    alert('Hello Angular!');
  }
}
