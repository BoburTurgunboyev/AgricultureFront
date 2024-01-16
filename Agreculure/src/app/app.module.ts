import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './components/products/products.component';
import { OfferComponent } from './components/offer/offer.component';
import { ShopComponent } from './pages/shop/shop.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { ShopfirstComponent } from './components/shopfirst/shopfirst.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ShopsingleComponent } from './pages/shopsingle/shopsingle.component';
import { ShopsinglefirstComponent } from './components/shopsinglefirst/shopsinglefirst.component';
import { QuentityComponent } from './components/quentity/quentity.component';
import { DescriptionComponent } from './components/description/description.component';
import { RelatedproductsComponent } from './components/relatedproducts/relatedproducts.component';
import { ServiceComponent } from './pages/service/service.component';
import { ServicefirstComponent } from './components/servicefirst/servicefirst.component';
import { BetterComponent } from './components/better/better.component';
import { DairyComponent } from './components/dairy/dairy.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ProductsComponent,
    OfferComponent,
    ShopComponent,
    BottomComponent,
    ShopfirstComponent,
    SubscribeComponent,
    ShopsingleComponent,
    ShopsinglefirstComponent,
    QuentityComponent,
    DescriptionComponent,
    RelatedproductsComponent,
    ServiceComponent,
    ServicefirstComponent,
    BetterComponent,
    DairyComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
