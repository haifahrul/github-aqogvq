import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, EmailValidator } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar, MatVerticalStepper } from "@angular/material";
import { Title } from "@angular/platform-browser";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar,
    private titleService: Title,
    private authService:AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [
        "random@email.com",
        [Validators.email, Validators.required, Validators.minLength(6)]
      ],
      password: ["password", [Validators.required, Validators.minLength(6)]]
    });
    this.titleService.setTitle("Login");
  }
  login() {
    
    if (this.loginForm.valid) {
      this.authService.Authenticate()
      this.router.navigate(["event"]);      
    } else {
      this.snackbar.open("invalid username or password", null, {
        duration: 2000,
        verticalPosition: "top"
      });
    }
  }
}
