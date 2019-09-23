import { Component, OnInit } from "@angular/core";
import { Contact } from "src/app/shared/models/contact.model";
import { Answers } from "src/app/shared/models/answers.model";
import { ContactAdminService } from "../../services/contact/contact-admin.service";

@Component({
  selector: "app-contact-answer",
  templateUrl: "./contact-answer.component.html",
  styleUrls: ["./contact-answer.component.scss"]
})
export class ContactAnswerComponent implements OnInit {
  contacts: Contact[];
  answers: Answers[];
  constructor(private conAns: ContactAdminService) {}

  ngOnInit() {
    this.conAns.getQuestions().subscribe(
      (response: Contact[]) => {
        console.log(response), (this.contacts = response);
      },
      error => error
    );
    this.conAns.getAnswers().subscribe(
      (response: Answers[]) => {
        console.log(response), (this.answers = response);
      },
      error => error
    );
  }
}
