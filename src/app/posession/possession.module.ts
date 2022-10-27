import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeDirective} from './home/home.directive';
import {RoomDirective} from './home/room/room.directive';
import { PossessionComponent } from './possession.component';

const DIRECTIVES = [
  HomeDirective,
  RoomDirective
]

const COMPONENTS = [
  PossessionComponent
]


@NgModule({
  declarations: [
    ...DIRECTIVES,
    ...COMPONENTS,
  ],
  exports: [
    PossessionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PossessionModule { }
