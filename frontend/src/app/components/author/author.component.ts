import { Author } from './../models/author.model';
import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  items: Author;
  constructor(
    private author : AuthorService
  ) { }

  ngOnInit() {
    this.author.getAuthor().subscribe(
      (response: Author) => {
        console.log(response),
        this.items = response
      },
      error => error.error.error
    )
  }

}
