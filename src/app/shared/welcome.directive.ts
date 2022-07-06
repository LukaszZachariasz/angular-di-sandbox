import { Directive } from '@angular/core';
import {WelcomeService} from './welcome.service';

@Directive({
  selector: '[appWelcome]',
  providers: [
    WelcomeService
  ]
})
export class WelcomeDirective {
}
