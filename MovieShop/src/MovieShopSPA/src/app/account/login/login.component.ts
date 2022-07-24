import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Errors } from 'src/app/shared/models/errors';
import { Login } from 'src/app/shared/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean = false;
  errors: Errors = { errors: {} };

  isSubmitting = false;
  userLogin: Login = {
    password: '',
    email: ''
  };
  constructor(private authService: AuthenticationService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }

  loginSubmit(form: NgForm) {

    this.isSubmitting = true;
    if (form.invalid) {
      this.isSubmitting = false;
      return;
    }

    this.errors = { errors: {} };

    this.authService.login(this.userLogin)
      .subscribe(
        data => this.router.navigateByUrl('/'),
        (err: HttpErrorResponse) => {
          this.invalidLogin = true;
          this.isSubmitting = false;
          console.log(err);
        }

      )
  }

}
