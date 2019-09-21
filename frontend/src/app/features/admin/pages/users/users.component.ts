import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user/user.service";
import { User } from "src/app/shared/models/user.model";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  users: User[];
  oneUser: User;
  constructor(private user: UserService) {}

  ngOnInit() {
    this.user.getUsers().subscribe((response: User[]) => {
      console.log(response);
      this.users = response;
    });
  }

  deleteUser(data: number) {
    this.user.deleteUser(data).subscribe((response: number) => {
      console.log(response),
        this.user.getUsers().subscribe((response: User[]) => {
          console.log(response);
          this.users = response;
        });
    });
  }

  getOneUser(id: number) {
    this.user.getOneUser(id).subscribe(
      (response: User) => {
        this.oneUser = response;
      }
    )
  }
}
