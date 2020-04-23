import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAssignmentItemsComponent } from './all-assignment-items/all-assignment-items.component';
import { NewAssignmentComponent } from './new-assignment/new-assignment.component';
import { SingleAssignmentItemComponent } from './single-assignment-item/single-assignment-item.component';


const routes: Routes = [
  {path:'task', component: AllAssignmentItemsComponent},
  {path:'form', component: NewAssignmentComponent},
  {path:'item/:itemID', component: SingleAssignmentItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
