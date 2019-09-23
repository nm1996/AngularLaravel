import { AuthService } from "../../../shared/services/auth/auth.service";
import { TokenService } from "../../../shared/services/token/token.service";
import { JarService } from "../../../shared/services/jar/jar.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  ValidationErrors
} from "@angular/forms";

const passwordErrorValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const pass = control.get("password");
  const r_pass = control.get("password_confirmation");

  return pass.value !== r_pass.value ? { password: true } : null;
};

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(
    private jar: JarService,
    private Token: TokenService,
    private router: Router,
    private auth: AuthService
  ) {
    this.form = new FormGroup(
      {
        name: new FormControl("", [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3)
        ]),
        email: new FormControl("", [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(5),
          Validators.email
        ]),
        city: new FormControl("", [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(2)
        ]),
        address: new FormControl("", [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(6)
        ]),
        password: new FormControl("", [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3)
        ]),
        password_confirmation: new FormControl("", [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3)
        ])
      },
      { validators: passwordErrorValidator }
    );
  }
  get name() {
    return this.form.get("name");
  }
  get email() {
    return this.form.get("email");
  }
  get city() {
    return this.form.get("city");
  }
  get address() {
    return this.form.get("address");
  }
  get password() {
    return this.form.get("password");
  }
  get password_confirmation() {
    return this.form.get("password_confirmation");
  }

  onSubmit() {
    this.jar
      .signup({
        name: this.form.value.name,
        email: this.form.value.email,
        city: this.form.value.city,
        address: this.form.value.address,
        password: this.form.value.password,
        password_confirmation: this.form.value.password_confirmation
      })
      .subscribe(
        data => {
          this.handleResponse(data);
        },
        error => console.log(error)
      );
  }

  handleResponse(data) {
    this.router.navigateByUrl("/authorization/login");
  }

  passwordConfirm(group: FormGroup) {
    let pass = this.password;
    let r_pass = this.password_confirmation;

    return pass === r_pass ? null : { notSame: true };
  }
  ngOnInit() {}
}
