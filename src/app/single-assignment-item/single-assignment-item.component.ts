import { Component, OnInit } from '@angular/core';
import { AssignmentItem } from '../assignment-item';
import { ActivatedRoute } from '@angular/router';
import { AssignmentTaskServiceService } from '../assignment-task-service.service';

@Component({
  selector: 'app-single-assignment-item',
  templateUrl: './single-assignment-item.component.html',
  styleUrls: ['./single-assignment-item.component.css']
})
export class SingleAssignmentItemComponent implements OnInit {
  public assignmentItem:AssignmentItem

  constructor(
    private route:ActivatedRoute,
    private assignmentTaskService:AssignmentTaskServiceService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) =>{
         this.assignmentTaskService.getAssignmentItem(params.get("itemID")).subscribe(
          (data)=> {
            this.assignmentItem = data;
          }
        );  
      }
    );
  }
}
