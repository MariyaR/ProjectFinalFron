import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MerciPageComponent } from './merci-page/merci-page.component';
import { PanierComponent } from './panier/panier.component';
import { RegisterComponent } from './register/register.component';
import { UserBarVerticalComponent } from './user-bar-vertical/user-bar-vertical.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'userProfile', component: UserProfileComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', component: AboutComponent},
  {path: 'editProfile', component: EditProfileComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
{path: '', redirectTo: '/about', pathMatch: 'full'},
{path: 'userBarVertical', component: UserBarVerticalComponent},
{path: 'commandeValidation', component: MerciPageComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
