import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMultiSelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
