import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'; 
//import { AngularFireModule } from 'angularfire2';
//import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service' ;

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PurchaseordersComponent } from './components/purchaseorders/purchaseorders.component';

const appRoutes: Routes = [
  {path:'',component:HomeComponent}
  ,{path:'products',component:ProductsComponent}
  ,{path:'orders',component:OrdersComponent}
  ,{path:'purchaseorders',component:PurchaseordersComponent}
  ,{path:'about',component:AboutComponent}
  
  //,{path:'{name path}',component}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    ProductsComponent,
    OrdersComponent,
    PurchaseordersComponent
  ],
  imports: [
    BrowserModule,
    //AngularFireModule.initializeApp(environment.firebase ),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
