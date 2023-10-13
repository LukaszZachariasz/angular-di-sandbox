import { Directive } from '@angular/core';

@Directive({
  selector: '[appHome]',
  providers: [
    // {
    //   provide: DoorLock,
    //   useFactory: (): DoorLock => {
    //     return {
    //       lockTheDoors: () => alert('Home closed')
    //     }
    //   }
    // }
  ]
})
export class HomeDirective {
}
