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
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabaseService } from './in-memory-database.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire'; 
import { AngularFirestoreModule } from '@angular/fire/firestore';


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
    HttpClientModule,
    /*HttpClientInMemoryWebApiModule.forRoot(
     InMemoryDatabaseService,{dataEncapsulation:false}
    ),*/
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [AssignmentTaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
