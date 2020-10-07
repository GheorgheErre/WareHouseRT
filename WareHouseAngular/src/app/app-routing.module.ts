import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CpuListComponent } from './show-list-article/cpu-list/cpu-list.component';
import { LoginComponent } from "./login/login.component";
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { pathToFileURL } from 'url';
import { CableListComponent } from './show-list-article/cable-list/cable-list.component';
import { CellphoneListComponent } from './show-list-article/cellphone-list/cellphone-list.component';
import { DesktopListComponent } from './show-list-article/desktop-list/desktop-list.component';
import { DockingStationListComponent } from './show-list-article/docking-station-list/docking-station-list.component';
import { GpuListComponent } from './show-list-article/gpu-list/gpu-list.component';
import { GraficTabletListComponent } from './show-list-article/grafic-tablet-list/grafic-tablet-list.component';
import { HddListComponent } from './show-list-article/hdd-list/hdd-list.component';
import { KeyboardListComponent } from './show-list-article/keyboard-list/keyboard-list.component';
import { LaptopListComponent } from './show-list-article/laptop-list/laptop-list.component';
import { MonitorListComponent } from './show-list-article/monitor-list/monitor-list.component';
import { MouseListComponent } from './show-list-article/mouse-list/mouse-list.component';
import { OperativeSystemListComponent } from './show-list-article/operative-system-list/operative-system-list.component';
import { PowerSupplieListComponent } from './show-list-article/power-supplie-list/power-supplie-list.component';
import { RamListComponent } from './show-list-article/ram-list/ram-list.component';
import { SoftwareListComponent } from './show-list-article/software-list/software-list.component';
import { SsdListComponent } from './show-list-article/ssd-list/ssd-list.component';
import { TokenListComponent } from './show-list-article/token-list/token-list.component';


const routes: Routes = [ 
  {path:"", component: WelcomeComponent},
  {path:"cpulist", component: CpuListComponent},
  {path:"loginsuccess", component: LoginsuccessComponent},
  {path:"registration", component: RegistrationComponent},
  {path:"cablelist", component: CableListComponent},
  {path:"cellphonelist", component: CellphoneListComponent},
  {path:"desktoplist", component: DesktopListComponent},
  {path:"dockingStationlist", component: DockingStationListComponent},
  {path:"gpulist", component: GpuListComponent},
  {path:"graficTabletlist", component: GraficTabletListComponent},
  {path:"hddlist", component: HddListComponent},
  {path:"keyboardlist", component: KeyboardListComponent},
  {path:"laptoplist", component: LaptopListComponent},
  {path:"monitorlist", component: MonitorListComponent},
  {path:"mouselist", component: MouseListComponent},
  {path:"operativeSystemlist", component: OperativeSystemListComponent},
  {path:"powerSupplielist", component: PowerSupplieListComponent},
  {path:"ramlist", component: RamListComponent},
  {path:"softwarelist", component: SoftwareListComponent},
  {path:"ssdlist", component: SsdListComponent},
  {path:"tokenlist", component: TokenListComponent}
  
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
