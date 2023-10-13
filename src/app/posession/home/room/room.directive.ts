import {Directive, Host, Self, SkipSelf, Optional} from '@angular/core';
import {DoorLock} from '../../door-lock';

@Directive({
  selector: '[appRoom]',
  providers: [
    {
      provide: DoorLock,
      useFactory: (): DoorLock => {
        return {
          lockTheDoors: () => alert('Room closed')
        }
      }
    }
  ]
})
export class RoomDirective {
  constructor(private doorLockService: DoorLock) {
    this.doorLockService?.lockTheDoors();
  }
}
