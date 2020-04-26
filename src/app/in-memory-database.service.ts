import { Injectable } from '@angular/core';
import { AssignmentItem } from './assignment-item';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDatabaseService implements InMemoryDbService {

  createDb(){
    const items:AssignmentItem[]=[
      {id:1,title:"WDF",description:"WDF",dategiven: "03/02/20",datedue: "05/05/20",percentage: 65},
      {id:2,title:"AMR",description:"AMR",dategiven: "03/02/20",datedue: "03/05/20",percentage: 65},
      {id:3,title:"DL",description:"DL",dategiven: "03/02/20",datedue: "03/05/20",percentage: 65}
    ];

    return {items};
  }
}
