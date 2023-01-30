import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    MenuComponent,
    ContactComponent,
    OrderComponent,
    FooterComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
