import { ContactService } from './../../../shared/services/contact/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/shared/models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public form: Contact  = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  items;
  constructor(
    private contact: ContactService,
    private router: Router
  ) { }

  ngOnInit(
  ) {
    this.contact.getInfos().subscribe(
      response =>{
        console.log(response),
        this.items = response;
      },
      error => {}
    )
  }

  onSubmit(){
    this.contact.insertContact(this.form).subscribe(
      (response: Contact) => {
        console.log(response);
        this.handleResponse();
      },
      error => {error}
    )
  }

  handleResponse(){
    this.router.navigateByUrl('');
  }


}
