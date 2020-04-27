import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { AssignmentItem } from '../assignment-item';
import { AssignmentTaskServiceService } from '../assignment-task-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-assignment',
  templateUrl: './new-assignment.component.html',
  styleUrls: ['./new-assignment.component.css']
})
export class NewAssignmentComponent implements OnInit {
  public assignmentForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private assignmentTaskService:AssignmentTaskServiceService, private router:Router) {} 
    
  ngOnInit() {
    this.assignmentForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl(),
      dategiven: new FormControl('', Validators.required),
      datedue: new FormControl('', Validators.required),
      percentage:new FormControl('', Validators.required)
    });
  
  }

  public onSubmit(item:AssignmentItem): void{
    if (this.assignmentForm.status === 'VALID')
    {
      console.log("Valid new item being added to the DB");
      this.assignmentTaskService.addAssignmentItem(item).subscribe(
        (data)=>{
          this.router.navigate(['/task']);
        }
      );
      this.assignmentForm.reset();
    }
    else{
      console.log("*** Invalid item added ***");
    }
    

  }
}
