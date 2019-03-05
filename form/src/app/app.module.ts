import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown'
import { AppComponent } from './app.component';
import {UserListComponent} from './user-list.component'
//services
import { UserService } from './user.service';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,FormsModule,   
    //BsDatepickerModule.forRoot(),
    // DatepickerModule.forRoot() ,
    NgMultiSelectDropDownModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
