import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CpuListComponent } from './show-list-article/cpu-list/cpu-list.component';
import { LoginComponent } from "./login/login.component";
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [ 
  {path:"home", component: HomePageComponent},
  {path:"cpulist", component: CpuListComponent},
  {path:"", component: LoginComponent},
  {path:"loginsuccess", component: LoginsuccessComponent},
  {path:"registration", component: RegistrationComponent},
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
