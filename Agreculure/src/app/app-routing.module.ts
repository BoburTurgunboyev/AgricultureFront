import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopsingleComponent } from './pages/shopsingle/shopsingle.component';
import { ServiceComponent } from './pages/service/service.component';
import { ServicesingleComponent } from './pages/servicesingle/servicesingle.component';
import path from 'path';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';



const routes: Routes = [
  { path: 'main', component: MainComponent},
  {path:'shop',component:ShopComponent},
  {path:'shopsingle',component:ShopsingleComponent},
  {path:'service',component:ServiceComponent},
  {path:'servicesingle',component:ServicesingleComponent},
  {path:'about',component:AboutComponent},
  {path:'news',component:NewsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
