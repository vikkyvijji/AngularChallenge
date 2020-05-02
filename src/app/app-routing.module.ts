import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import { AuthguardService } from './service/authguard.service';


const approutes: Routes = [
  {path:"", redirectTo: 'login', pathMatch: 'full'},
  {path:"register", component: RegisterComponent},
  {path:"login", component: LoginComponent},
  {path:"welcome", component: WelcomeComponent, canActivate: [AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
