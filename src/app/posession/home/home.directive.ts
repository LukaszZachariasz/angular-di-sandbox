import { Directive } from '@angular/core';
import {DoorLock} from '../door-lock';

@Directive({
  selector: '[appHome]',
  // providers: [
  //   {
  //     provide: DoorLock,
  //     useFactory: (): DoorLock => {
  //       return {
  //         lockTheDoors: () => alert('Home closed')
  //       }
  //     }
  //   }
  // ]
})
export class HomeDirective {
}
