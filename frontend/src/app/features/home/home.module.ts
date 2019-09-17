import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AuthorService } from './../../shared/services/author/author.service';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AuthorComponent } from './author/author.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    AuthorComponent,
    ContactComponent,
    HomeComponent,
    IndexComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  providers: [
    AuthorService
  ]
})
export class HomeModule { }
