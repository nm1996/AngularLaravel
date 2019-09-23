import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthorizationComponent } from "./authorization.component";
import { AuthorizationRoutingModule } from "./authorization-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";

@NgModule({
  declarations: [AuthorizationComponent, LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthorizationModule {}
