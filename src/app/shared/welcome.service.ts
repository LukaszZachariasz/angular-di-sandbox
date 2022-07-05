import { Injectable } from '@angular/core';

@Injectable()
export class WelcomeService {

  sayHello() {
    alert('Hello Angular!');
  }
}
