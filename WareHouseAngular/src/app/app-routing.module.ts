import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CpuListComponent } from './show-list-article/cpu-list/cpu-list.component';

const routes: Routes = [ {path:"", component: HomePageComponent}, {path:"cpulist", component: CpuListComponent}] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
