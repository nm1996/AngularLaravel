import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { KidsProductComponent } from './pages/kids-product/kids-product.component';
import { WomenProductComponent } from './pages/women-product/women-product.component';
import { MenProductComponent } from './pages/men-product/men-product.component';
import { ProductsComponent } from './products.component';
import { Routes, RouterModule } from '@angular/router';
import { SportsProductComponent } from './pages/sports-product/sports-product.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes : Routes = [
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            {
                path: '', redirectTo: 'men-products', pathMatch: 'full'
            },
            {
                path: 'men-products', component: MenProductComponent
            },
            {
                path: 'women-products', component: WomenProductComponent
            },
            {
                path: 'kids-products', component: KidsProductComponent
            },
            {
                path: 'sports-products', component: SportsProductComponent
            },
            {
                path: 'product-details/:id', component: ProductDetailsComponent
            },
            {
                path: '**', redirectTo: 'men-products'
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

export class ProductsRoutingModule {}