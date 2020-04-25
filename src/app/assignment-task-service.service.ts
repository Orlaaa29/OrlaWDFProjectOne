import { Injectable } from '@angular/core';
import { AssignmentItem } from './assignment-item';

@Injectable({
  providedIn: 'root'
})
export class AssignmentTaskServiceService {
  private db: AssignmentItem[];
  private indexOfNextItem:number=4;
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
     let filteredArray:AssignmentItem[];

     filteredArray = this.db.filter((item) =>{
       if (item.id==itemID)
       {
         return true;
       }
       else{
         return false;
       }
     });
     return filteredArray[0];
   }

   public addAssignmentItem(anItem:AssignmentItem):void{
     anItem.id=this.indexOfNextItem;
     this.indexOfNextItem++;
     this.db.push(anItem);
   }

   public deleteAssignmentItem(anItem:AssignmentItem):void{}

  public updateAssignmentItem(updatedItem:AssignmentItem):void{
    let i:number = this.db.indexOf(updatedItem);
  
    this.db[i].description=updatedItem.description;
    this.db[i].dategiven=updatedItem.dategiven;
    this.db[i].datedue=updatedItem.datedue;
    this.db[i].percentage=updatedItem.percentage;
  }
 
}
