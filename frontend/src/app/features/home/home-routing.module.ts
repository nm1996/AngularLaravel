import { AuthorComponent } from './../author/author.component';
import { ContactComponent } from './../contact/contact.component';
import { HomeComponent } from './../home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '', redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: '', component: HomeComponent
            },
            {
                path: 'contact', component: ContactComponent
            },
            {
                path: 'author', component: AuthorComponent
            },
            {
                path: '**', redirectTo: 'home'
            }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class HomeRoutingModule {}