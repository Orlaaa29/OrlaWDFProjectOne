import { Component, OnInit } from '@angular/core';
import { AssignmentTaskServiceService } from '../assignment-task-service.service';
import { AssignmentItem } from '../assignment-item';

@Component({
  selector: 'app-all-assignment-items',
  templateUrl: './all-assignment-items.component.html',
  styleUrls: ['./all-assignment-items.component.css']
})
export class AllAssignmentItemsComponent implements OnInit {

  private assignmentTask:AssignmentItem[];

  constructor(private AssignmentTaskService: AssignmentTaskServiceService) { }

  ngOnInit() {
    this.AssignmentTaskService.getAllAssignmentItems().subscribe(
      (data)=>{
        this.assignmentTask = data;
      }
    )
  }

}
