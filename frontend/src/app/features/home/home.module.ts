import { AuthorService } from './../../shared/services/author/author.service';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './../contact/contact.component';
import { AuthorComponent } from './../author/author.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AuthorComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    AuthorService
  ]
})
export class HomeModule { }
