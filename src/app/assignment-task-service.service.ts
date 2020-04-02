import { Injectable } from '@angular/core';
import { AssignmentItem } from './assignment-item';

@Injectable({
  providedIn: 'root'
})
export class AssignmentTaskServiceService {
  private db: AssignmentItem[];
  constructor() {
    this.db=[
      {
        id:1,
        description:"WDF",
        quantity:1
      },
      {
        id:2,
        description:"AMR",
        quantity:1
      },
      {
        id:3,
        description:"DL",
        quantity:1
      }
    ];
   }

   public getAllAssignmentItems():AssignmentItem[]
   {
     return this.db;
   }

   public getAssignmentItem(itemID:number):AssignmentItem
   {
     return null;
   }

   public addAssignmentItem(anItem:AssignmentItem):void{
     this.db.push(anItem);
   }

   public deleteAssignmentItem(anItem:AssignmentItem):void{}

  public updateAssignmentItem(updateItem:AssignmentItem):void{}
 
}
