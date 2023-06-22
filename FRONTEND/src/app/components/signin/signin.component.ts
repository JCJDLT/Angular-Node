import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthService, private router: Router) { }
  formSubmitted = false; // Nueva variable
  emailEntered = false;  // Nueva variable
  login = false;

  signIn(form: NgForm) {
    this.formSubmitted = true;
    if (this.user.email) {
      this.emailEntered = true;
    }
    if (form.valid) {
      this.authService.signIn(this.user)
        .subscribe(
          res => {
            console.log(res);
            localStorage.setItem('token', res.token)
            this.router.navigate(["/private"])
          },
          err => {
            console.log(err);
            this.emailEntered = false;
            this.login = true;
          }
        )
    }
  }
}
