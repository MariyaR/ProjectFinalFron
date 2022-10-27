import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AboutComponent } from './about/about.component';
import { PanierComponent } from './panier/panier.component';
import { RegisterComponent } from './register/register.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserBarVerticalComponent } from './user-bar-vertical/user-bar-vertical.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MerciPageComponent } from './merci-page/merci-page.component';
import { FicheproduitComponent } from './ficheproduit/ficheproduit.component';
import { AdminComponent } from './admin/admin.component';
import { PersonneDetailComponent } from './personne-detail/personne-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    AboutComponent,
    PanierComponent,
    RegisterComponent,
    EditProfileComponent,
    HeaderComponent,
    FooterComponent,
    UserBarVerticalComponent,
    MerciPageComponent,
    FicheproduitComponent,
    AdminComponent,
    PersonneDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
