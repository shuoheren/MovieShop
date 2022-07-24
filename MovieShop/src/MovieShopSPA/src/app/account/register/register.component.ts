import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/core/services/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  constructor(private fb: FormBuilder, private validatorService: ValidatorService) {
    this.registerForm = this.fb.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [null, {
        validators: [Validators.required, Validators.email],
        asyncValidators: [this.validatorService.emailExistsValidator()],
        updateOn: 'blur'
      }],

      dateOfBirth: ['', [Validators.required, this.validatorService.ageValidaor]],
      password: ['', [Validators.required, this.validatorService.passwordValidator]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.validatorService.passwordMatch });

  }

  ngOnInit(): void {
  }

  submitForm() {

    console.log(this.registerForm);
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


  }

}
