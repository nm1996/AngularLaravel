import { Injectable } from "@angular/core";
import { CommentStmt } from "@angular/compiler";

@Injectable()
export class TokenService {
  private iss = {
    login: "http://localhost:8000/api/login",
    signup: "http://localhost:8000/api/signup"
  };

  constructor() {}

  handle(token) {
    this.set(token);
  }

  handleUser(user) {
    console.log(user, "handle user");
    this.setUser(user);
  }

  set(token) {
    localStorage.setItem("token", token);
  }

  setUser(user) {
    console.log(user);
    localStorage.setItem("user", user);
  }

  get() {
    return localStorage.getItem("token");
  }

  getUser() {
    return localStorage.getItem("user");
  }

  removeUser() {
    return localStorage.removeItem("user");
  }

  remove() {
    localStorage.removeItem("token");
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split(".")[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }

  // isAdmin() {
  //   let role_id = +this.getRole();

  //   return role_id == 2 ? true : false;
  // }

  setRole(role_id) {
    console.log("role_id");
    localStorage.setItem("role_id", role_id);
  }

  handleRole(role_id) {
    console.log(role_id, "handle role");
    this.setRole(role_id);
  }

  getRole() {
    return localStorage.getItem("role_id");
  }

  removeRole() {
    return localStorage.removeItem("role_id");
  }
}
