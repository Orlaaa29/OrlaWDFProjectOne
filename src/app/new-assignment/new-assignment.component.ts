import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-new-assignment',
  templateUrl: './new-assignment.component.html',
  styleUrls: ['./new-assignment.component.css']
})
export class NewAssignmentComponent implements OnInit {
  assignmentForm;

  constructor(
    private formBuilder:FormBuilder,
  ) { 
    this.assignmentForm = this.formBuilder.group({
      title: '',
      description: '',
      dategiven: '',
      datedue: '',
      percentage:''
    });
  }

  ngOnInit(): void {
  }

}
