import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {AssignmentTaskServiceService} from '../assignment-task-service.service';
import {AssignmentItem} from '../assignment-item';

@Component({
  selector: 'app-update-assignment',
  templateUrl: './update-assignment.component.html',
  styleUrls: ['./update-assignment.component.css']
})
export class UpdateAssignmentComponent implements OnInit {
  private assignmentItem:AssignmentItem;
  private updateAssignmentForm:FormGroup;

  constructor(
    private route:ActivatedRoute,
    private formBuilder:FormBuilder,
    private router:Router,
    private assignmentTaskService:AssignmentTaskServiceService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) =>{
        this.assignmentItem= this.assignmentTaskService.getAssignmentItem(+params.get("itemID"));
      }    
    );

    this.updateAssignmentForm =this.formBuilder.group({
      
    })
  }

}
