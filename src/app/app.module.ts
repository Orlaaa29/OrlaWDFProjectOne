import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAssignmentComponent } from './new-assignment/new-assignment.component';
import { AllAssignmentItemsComponent } from './all-assignment-items/all-assignment-items.component';
import { SingleAssignmentItemComponent } from './single-assignment-item/single-assignment-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewAssignmentComponent,
    AllAssignmentItemsComponent,
    SingleAssignmentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
