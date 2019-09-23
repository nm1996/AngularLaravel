import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user/user.service";
import { User } from "src/app/shared/models/user.model";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  editUserForm: FormGroup;
  insertUserForm: FormGroup;
  users: User[];
  oneUser: User;
  constructor(private user: UserService) {
    this.editUserForm = new FormGroup({
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
      role_id: new FormControl("", [Validators.required])
    });
    this.insertUserForm = new FormGroup({
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
      role_id: new FormControl("", [Validators.required])
    });
  }

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
    this.user.getOneUser(id).subscribe((response: User) => {
      this.oneUser = response;
      this.editUserForm.patchValue({ name: response.name });
      this.editUserForm.patchValue({ email: response.email });
      this.editUserForm.patchValue({ city: response.city });
      this.editUserForm.patchValue({ address: response.address });
      this.editUserForm.patchValue({ password: response.password });
      this.editUserForm.patchValue({ role_id: response.role_id });
    });
  }

  get updateCity() {
    return this.editUserForm.get("city");
  }
  get addCity() {
    return this.insertUserForm.get("city");
  }
  get updateAddress() {
    return this.editUserForm.get("address");
  }
  get addAddress() {
    return this.insertUserForm.get("address");
  }

  get updatePass() {
    return this.editUserForm.get("password");
  }

  get addPass() {
    return this.insertUserForm.get("password");
  }

  get updateEmail() {
    return this.editUserForm.get("email");
  }

  get addEmail() {
    return this.insertUserForm.get("email");
  }

  get updateName() {
    return this.editUserForm.get("name");
  }

  get addName() {
    return this.insertUserForm.get("name");
  }

  get updateRole() {
    return this.editUserForm.get("role_id");
  }

  get addRole() {
    return this.insertUserForm.get("role_id");
  }

  update(id: number) {
    if (
      this.editUserForm.value.role_id !== undefined &&
      this.editUserForm.value.role_id !== null
    ) {
      this.user
        .updateUser(
          id,
          this.editUserForm.value.name,
          this.editUserForm.get("email").value,
          this.editUserForm.value.password,
          this.editUserForm.value.city,
          this.editUserForm.value.address,
          this.editUserForm.value.role_id
        )
        .subscribe((response: number) => {
          console.log("User updated 1", response);
          this.user
            .getUsers()
            .subscribe((response: User[]) => (this.users = response));
        });
    } else {
      this.user
        .updateUser(
          id,
          this.editUserForm.value.name,
          this.editUserForm.get("email").value,
          this.editUserForm.value.password,
          this.editUserForm.value.city,
          this.editUserForm.value.address
        )
        .subscribe((response: number) => {
          console.log("USER updated 2", response);
          this.user.getUsers().subscribe((response: User[]) => {
            console.log(response);
            this.users = response;
          });
        });
    }
  }

  insert() {
    this.user
      .insertUser(
        this.insertUserForm.value.name,
        this.insertUserForm.get("email").value,
        this.insertUserForm.value.password,
        this.insertUserForm.value.city,
        this.insertUserForm.value.address,
        this.insertUserForm.value.role_id
      )
      .subscribe((response: number) => {
        console.log(response, "user added"),
          this.user.getUsers().subscribe((response: User[]) => {
            console.log(response);
            this.users = response;
          });
      });
  }
}
