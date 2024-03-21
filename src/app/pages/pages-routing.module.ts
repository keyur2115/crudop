import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';

const routes: Routes = [
     {
      path:'',
      component: MainLayoutComponent,
      children:[
          {path:'', redirectTo:'dashboard', pathMatch:'full'},
          {path:'dashboard', component:DashboardComponent},
          {path:'about', component:AboutComponent},
          {path:'category', component:CategoryComponent},
          {path:'product', component: ProductComponent}
        ]
     }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
