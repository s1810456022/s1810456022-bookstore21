import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'bs-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private authService:AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["", Validators.required, Validators.email],
      password: ["", Validators.required]
    });
  }

}