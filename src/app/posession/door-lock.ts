import { Injectable } from '@angular/core';

@Injectable()
export class DoorLock {
  public lockTheDoors() {
    alert('All Doors locked')
  }
}
