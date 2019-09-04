import { TokenService } from './../../services/token/token.service';
import { JarService } from './../../services/jar/jar.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null,
    city: null,
    address: null,
  }

  public error = [];

  constructor(
    private Jar : JarService,
    private Token : TokenService,
    private router : Router
  ) { }


  onSubmit() {
    this.Jar.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/login');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
