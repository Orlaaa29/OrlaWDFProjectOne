import { Injectable } from '@angular/core';
import { AssignmentItem } from './assignment-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentTaskServiceService {

  private webURI: string ='api/items';
  private httpOptions ={
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  };

  constructor(private http:HttpClient) {
    console.log("Constructing the service");
   }

   public getAllAssignmentItems():Observable<AssignmentItem[]>
   {
     console.log("AssignmentTaskServiceService:getAllAssignmentTaskItems ");
     return this.http.get<AssignmentItem[]>(this.webURI,this.httpOptions);
   }

   public getAssignmentItem(itemID:number):Observable<AssignmentItem>
   {
     console.log("Looking for the item", itemID);
     return this.http.get<AssignmentItem>(this.webURI + "/" + itemID);
   }

   public addAssignmentItem(anItem:AssignmentItem):Observable<AssignmentItem>{
    return this.http.post<AssignmentItem>(this.webURI, anItem, this.httpOptions);
   }

   public deleteAssignmentItem(anItem:AssignmentItem):Observable<AssignmentItem>{
    return this.http.delete<AssignmentItem>(this.webURI + "/" + anItem.id, this.httpOptions);
   }

  public updateAssignmentItem(updatedItem:AssignmentItem):Observable<AssignmentItem>{
  return this.http.put<AssignmentItem>(this.webURI + "/" + updatedItem, this.httpOptions);
  }
 
}
