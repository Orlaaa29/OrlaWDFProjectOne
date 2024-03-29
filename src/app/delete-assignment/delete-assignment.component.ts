import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AssignmentItem } from '../assignment-item';
import {ActivatedRoute, Router} from '@angular/router';
import {AssignmentTaskServiceService} from '../assignment-task-service.service';

@Component({
  selector: 'app-delete-assignment',
  templateUrl: './delete-assignment.component.html',
  styleUrls: ['./delete-assignment.component.css']
})
export class DeleteAssignmentComponent implements OnInit {
  public confirmationForm:FormGroup;
  public itemToDelete:AssignmentItem;

  constructor(private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private assignmentTaskService:AssignmentTaskServiceService) { }

  ngOnInit(){
    this.route.paramMap.subscribe(
      (params) =>{
        this.assignmentTaskService.getAssignmentItem(params.get("itemID")).subscribe(
          (data)=> {
            this.itemToDelete = data;
          }
        );
      }    
    );

    this.confirmationForm =this.formBuilder.group({
      confirmation: new FormControl()
    });

    this.confirmationForm.patchValue({confirmation:'no'});
  }

  public confirmDelete(formValues:any):void{
    console.log(JSON.stringify(formValues));

    if (formValues.confirmation == "yes"){
      this.assignmentTaskService.deleteAssignmentItem(this.itemToDelete).subscribe(

        (data)=>{
          this.router.navigate(['/task']);
        }
      );
      
    }

    else{
      this.router.navigate(['/task']);
    }
  }

}
