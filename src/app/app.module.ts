import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { personalFormComponent } from './personalform/personalForm.component';
import { professionalFormComponent } from './professionalform/professionalForm.component';
import { app_routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, app_routing ],
  declarations: [ AppComponent, personalFormComponent, professionalFormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }