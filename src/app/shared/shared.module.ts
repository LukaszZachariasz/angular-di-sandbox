import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomeService} from './welcome.service';
import { WelcomeDirective } from './welcome.directive';



@NgModule({
  declarations: [
    WelcomeDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    WelcomeService
  ]
})
export class SharedModule { }
