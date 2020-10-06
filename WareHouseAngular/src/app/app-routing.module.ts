import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CpuListComponent } from './show-list-article/cpu-list/cpu-list.component';
import { LoginComponent } from "./login/login.component";
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { pathToFileURL } from 'url';

const routes: Routes = [ 
  {path:"", component: WelcomeComponent},
  {path:"cpulist", component: CpuListComponent},
  {path:"loginsuccess", component: LoginsuccessComponent},
  {path:"registration", component: RegistrationComponent},
  
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
