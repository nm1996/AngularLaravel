import { ContactAnswerComponent } from "./pages/contact-answer/contact-answer.component";
import { ProductsComponent } from "./pages/products/products.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { UsersComponent } from "./pages/users/users.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        redirectTo: "users",
        pathMatch: "full"
      },
      {
        path: "users",
        component: UsersComponent
      },
      {
        path: "products",
        component: ProductsComponent
      },
      {
        path: "contact",
        component: ContactAnswerComponent
      },
      {
        path: "**",
        redirectTo: "users"
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
