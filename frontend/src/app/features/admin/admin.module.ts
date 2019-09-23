import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserService } from "./services/user/user.service";
import { UsersComponent } from "./pages/users/users.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { ProductsComponent } from "./pages/products/products.component";

@NgModule({
  declarations: [AdminComponent, UsersComponent, ProductsComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [UserService]
})
export class AdminModule {}
