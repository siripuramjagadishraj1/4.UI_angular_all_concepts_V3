import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './form-demo.html',
  styleUrl: './form-demo.css',
})
export class FormDemo implements OnInit {

  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  signupForm:FormGroup;
  get f() { return this.signupForm.controls; }

  ngOnInit() {
      this.signupForm = this.formBuilder.group({
        'ruleName':['',[Validators.required, Validators.pattern("^[a-zA-Z0-9_]+$")]],
        'value':[10, [Validators.required]],
        'avatar':''
      });
  }

submitForm(){
    this.submitted = true;
    //console.log(this.signupForm.controls);
    if (this.signupForm.invalid) { return }
  else{//Porcess Form
    console.log(this.signupForm.value)
  }
}

onFileChange(event:any) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.signupForm.get('avatar').setValue(file);
  }
}

}
