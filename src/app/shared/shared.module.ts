import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomeService} from './welcome.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    WelcomeService
  ]
})
export class SharedModule { }
