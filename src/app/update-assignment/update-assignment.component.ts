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
      description: new FormControl(this.assignmentItem.description),
      dategiven: new FormControl(this.assignmentItem.dategiven, [Validators.required]),
      datedue: new FormControl(this.assignmentItem.datedue, [Validators.required]),
      percentage:new FormControl(this.assignmentItem.percentage, [Validators.required])
      
    });
  }

  public onSubmit(updatedItem:AssignmentItem):void{
    if (this.updateAssignmentForm.status === 'VALID')
    {
      console.log("Valid item, updating DB");
      this.assignmentItem.description=updatedItem.description;
      this.assignmentItem.dategiven=updatedItem.dategiven;
      this.assignmentItem.datedue=updatedItem.datedue;
      this.assignmentItem.percentage=updatedItem.percentage;
      this.assignmentTaskService.updateAssignmentItem(this.assignmentItem);

      this.router.navigate(['/task']);
    }
    else{
      console.log("*** Invaliditem submitted ***");
    }
  }

  public onCancel():void{
    console.log("Redirect back to list");
    this.router.navigate(['/task']);
  }
}
