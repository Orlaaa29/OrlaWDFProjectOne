import { Injectable } from '@angular/core';
import { AssignmentItem } from './assignment-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AssignmentTaskServiceService {

  private webURI: string ='api/items';
  private httpOptions ={
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  };

  constructor(private http:HttpClient, private firestore:AngularFirestore) {
    console.log("Constructing the service");
   }

   public getAllAssignmentItems():Observable<AssignmentItem[]>
   {
     console.log("AssignmentTaskServiceService:getAllAssignmentTaskItems ");
     //return this.http.get<AssignmentItem[]>(this.webURI,this.httpOptions);
     return this.firestore.collection<AssignmentItem>('items').valueChanges();
   }

   public getAssignmentItem(itemID:string):Observable<AssignmentItem>
   {
     console.log("Looking for the item", itemID);
    // return this.http.get<AssignmentItem>(this.webURI + "/" + itemID);
    return this.firestore.collection('items').doc<AssignmentItem>(itemID).valueChanges();
   }

   public addAssignmentItem(anItem:AssignmentItem):Observable<void>{
    //return this.http.post<AssignmentItem>(this.webURI, anItem, this.httpOptions);
    anItem.id = this.firestore.createId();

    // Write it to the Cloud Firestore and use the "from" operator to convert the returned Promise to
    // an Observable
    return from( this.firestore.collection('items').doc<AssignmentItem>(anItem.id).set(anItem) );
   }

   public deleteAssignmentItem(anItem:AssignmentItem):Observable<void>{
    //return this.http.delete<AssignmentItem>(this.webURI + "/" + anItem.id, this.httpOptions);
    return from( this.firestore.collection('items').doc(anItem.id).delete());
   }

  public updateAssignmentItem(updatedItem:AssignmentItem):Observable<void>{
    console.log("Updating item", updatedItem);
    //return this.http.put<AssignmentItem>(this.webURI + "/" + updatedItem, this.httpOptions);
    return from( this.firestore.collection('items').doc(updatedItem.id).set(updatedItem));


  }
 
}
