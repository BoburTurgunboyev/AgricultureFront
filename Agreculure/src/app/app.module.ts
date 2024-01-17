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
import { VideoComponent } from './components/video/video.component';
import { ServicesinglefirstComponent } from './components/servicesinglefirst/servicesinglefirst.component';
import { StoreComponent } from './components/store/store.component';
import { WhyComponent } from './components/why/why.component';
import { SpecilatyComponent } from './components/specilaty/specilaty.component';
import { ServicesingleComponent } from './pages/servicesingle/servicesingle.component';
import { LandComponent } from './components/land/land.component';
import { BestComponent } from './components/best/best.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutfirstComponent } from './components/aboutfirst/aboutfirst.component';
import { CreativeComponent } from './components/creative/creative.component';
import { TreyderComponent } from './components/treyder/treyder.component';
import { ModernComponent } from './components/modern/modern.component';
import { MeComponent } from './components/me/me.component';
import { KasbComponent } from './components/kasb/kasb.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsfirstComponent } from './components/newsfirst/newsfirst.component';



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
    ButtonComponent,
    VideoComponent,
    ServicesinglefirstComponent,
    StoreComponent,
    WhyComponent,
    SpecilatyComponent,
    ServicesingleComponent,
    LandComponent,
    BestComponent,
    AboutComponent,
    AboutfirstComponent,
    CreativeComponent,
    TreyderComponent,
    ModernComponent,
    MeComponent,
    KasbComponent,
    NewsComponent,
    NewsfirstComponent
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
