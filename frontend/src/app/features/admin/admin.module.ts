import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserService } from "./services/user/user.service";
import { UsersComponent } from "./pages/users/users.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ContactAnswerComponent } from './pages/contact-answer/contact-answer.component';
import { TrackingComponent } from './pages/tracking/tracking.component';

@NgModule({
  declarations: [AdminComponent, UsersComponent, ProductsComponent, ContactAnswerComponent, TrackingComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [UserService]
})
export class AdminModule {}
