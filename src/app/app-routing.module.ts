import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';
import { ForgetPasswordComponent } from './componets/forget-password/forget-password.component';
import { ResetPasswordComponent } from './componets/reset-password/reset-password.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'forget-password' , component:ForgetPasswordComponent},
  {path:'reset-password', component:ResetPasswordComponent},
  {path:'', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
