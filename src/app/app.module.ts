import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAssignmentComponent } from './new-assignment/new-assignment.component';
import { AllAssignmentItemsComponent } from './all-assignment-items/all-assignment-items.component';
import { SingleAssignmentItemComponent } from './single-assignment-item/single-assignment-item.component';
import { AssignmentTaskServiceService } from './assignment-task-service.service';
import { UpdateAssignmentComponent } from './update-assignment/update-assignment.component';
import { DeleteAssignmentComponent } from './delete-assignment/delete-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    NewAssignmentComponent,
    AllAssignmentItemsComponent,
    SingleAssignmentItemComponent,
    UpdateAssignmentComponent,
    DeleteAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AssignmentTaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
