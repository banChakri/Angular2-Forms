import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidationService } from '../shared/validation.service';
import { personalForm } from './personalForm';

@Component({
  moduleId: module.id,
  selector: 'personal-form',
  templateUrl: 'personalForm.component.html'
})
export class personalFormComponent implements OnInit {
  personalForm: FormGroup;
  model: personalForm;  
  dropDown: string[];
  //Toggle to disable editable
  submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
      this.model = new personalForm(18, 'firstName', 'lastName', 'test@test.com');
      
      this.dropDown = ['dropDown1', 'dropDown2', 
                     'dropDown3', 'dropDown4'];                     
                     
      this.personalForm = this.formBuilder.group({
        firstName:         [this.model.firstName, Validators.required],
        lastName:     [this.model.lastName, Validators.required],
        email:        [this.model.email, [Validators.required, ValidationService.emailValidator]],
        dropDown:     [this.dropDown, Validators.required]
      });
  }

  onSubmit()  {
    console.log(this.personalForm);
    this.submitted = true;
  }
}