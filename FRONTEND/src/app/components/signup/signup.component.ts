import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthService, private router: Router) {}

  signUp(form: NgForm) {
    if (form.valid) {
      // proceder con el envío del formulario
      this.authService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem("token", res.token)
          this.router.navigate(["/private"]);
        },
        err => console.log(err)
      )
    }else{
      form.control.markAllAsTouched();
    }
  }
}
