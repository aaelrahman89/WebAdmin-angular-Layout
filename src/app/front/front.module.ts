import { FrontProductsComponent } from './components/front-products/front-products.component';
import { FrontMainComponent } from './components/front-main/front-main.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FrontCategoriesComponent } from './components/front-categories/front-categories.component';

const routes: Routes = [
  { path: '', component: FrontMainComponent,
  children: [
    { path: 'products', component: FrontProductsComponent },
    { path: 'categories', component: FrontCategoriesComponent }
  ]
  }
]

@NgModule({
  declarations: [FrontMainComponent, FrontProductsComponent, FrontCategoriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FrontModule { }
