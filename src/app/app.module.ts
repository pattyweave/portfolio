import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { MoreComponent } from './components/more/more.component';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Angular Fire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDM6hJH8B_VQD3Fq66-Lj61Ge9k79M7tEA",
  authDomain: "pww-portfolio.firebaseapp.com",
  databaseURL: "https://pww-portfolio.firebaseio.com",
  projectId: "pww-portfolio",
  storageBucket: "pww-portfolio.appspot.com",
  messagingSenderId: "840415628020",
  appId: "1:840415628020:web:b67523c064acacd371eca1",
  measurementId: "G-XYTJH6NMH9"
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
