import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidationService } from '../shared/validation.service';
import { professionalForm } from './professionalForm';

@Component({
  moduleId: module.id,
  selector: 'professional-form',
  templateUrl: 'professionalForm.component.html'
})
export class professionalFormComponent implements OnInit {
  professionalForm: FormGroup;
  model: professionalForm;  
  dropDown: string[];
  //Toggle to disable editable
  submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
      this.model = new professionalForm(18, 'firstName', 'lastName', 'test@test.com');
      
      this.dropDown = ['dropDown1', 'dropDown2', 
                     'dropDown3', 'dropDown4'];                     
                     
      this.professionalForm = this.formBuilder.group({
        firstName:    [this.model.firstName, Validators.required],
        lastName:     [this.model.lastName, Validators.required],
        email:        [this.model.email, [Validators.required, ValidationService.emailValidator]],
        dropDown:     [this.dropDown, Validators.required]
      });
  }

  onSubmit()  {
    console.log(this.professionalForm);
    this.submitted = true;
  }
}