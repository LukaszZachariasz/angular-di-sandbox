import { Component } from '@angular/core';
import {DoorLock} from './door-lock';

@Component({
  selector: 'app-possession',
  templateUrl: './possession.component.html',
  providers: [
    {
      provide: DoorLock,
      useFactory: (): DoorLock => {
        return {
          lockTheDoors: () => alert('Possession closed')
        }
      }
    },
  ]
})
export class PossessionComponent {
}
