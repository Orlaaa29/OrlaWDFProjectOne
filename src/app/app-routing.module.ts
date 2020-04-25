import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAssignmentItemsComponent } from './all-assignment-items/all-assignment-items.component';
import { NewAssignmentComponent } from './new-assignment/new-assignment.component';
import { SingleAssignmentItemComponent } from './single-assignment-item/single-assignment-item.component';
import { UpdateAssignmentComponent } from './update-assignment/update-assignment.component';


const routes: Routes = [
  {path:'task', component: AllAssignmentItemsComponent},
  {path:'form', component: NewAssignmentComponent},
  {path:'item/:itemID', component: SingleAssignmentItemComponent},
  {path:'update/:itemID',component:UpdateAssignmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
