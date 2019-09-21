import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserService } from "./services/user/user.service";
import { UsersComponent } from "./pages/users/users.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";

@NgModule({
  declarations: [AdminComponent, UsersComponent],
  imports: [CommonModule, AdminRoutingModule],
  providers: [UserService]
})
export class AdminModule {}
