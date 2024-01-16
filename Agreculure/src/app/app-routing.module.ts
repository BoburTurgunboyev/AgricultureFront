import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopsingleComponent } from './pages/shopsingle/shopsingle.component';
import { ServiceComponent } from './pages/service/service.component';



const routes: Routes = [
  { path: 'main', component: MainComponent},
  {path:'shop',component:ShopComponent},
  {path:'shopsingle',component:ShopsingleComponent},
  {path:'service',component:ServiceComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
