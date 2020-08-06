import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['', Validators.required],
    });
    this.authService.getUser().subscribe(data => {
      console.log('Data from service', data);
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(data => console.log(data));
  }

}
