import { Injectable } from '@angular/core';
import { AssignmentItem } from './assignment-item';

@Injectable({
  providedIn: 'root'
})
export class AssignmentTaskServiceService {
  private db: AssignmentItem[];
  constructor() {
    console.log("Constructing the service");

    this.db=[
      {
        id:1,
        title:"WDF",
        description:"WDF",
        dategiven: "03/02/20",
        datedue: "05/05/20",
        percentage: 65
      },
      {
        id:2,
        title:"AMR",
        description:"AMR",
        dategiven: "03/02/20",
        datedue: "03/05/20",
        percentage: 65
      },
      {
        id:3,
        title:"DL",
        description:"DL",
        dategiven: "03/02/20",
        datedue: "03/05/20",
        percentage: 65
      }
    ];
   }

   public getAllAssignmentItems():AssignmentItem[]
   {
     console.log("AssignmentTaskServiceService:getAllAssignmentTaskItems ", this.db.length);
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
