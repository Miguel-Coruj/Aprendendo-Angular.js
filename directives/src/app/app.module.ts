import { NgSwitch } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgifComponent } from './ngif-ngfor/ngif.component';
import { SwitchsComponent } from './switchs/switchs.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    SwitchsComponent,
  ],
  imports: [
    BrowserModule,
    NgSwitch
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
