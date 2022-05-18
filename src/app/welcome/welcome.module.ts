import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';
import {WelcomeRoutingModule} from "./welcome-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    WelcomeMessageComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class WelcomeModule { }
