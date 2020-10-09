import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CpuListComponent } from './show-list-article/cpu-list/cpu-list.component';
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from './registration/registration.component';
import { pathToFileURL } from 'url';
import { CableListComponent } from './show-list-article/cable-list/cable-list.component';
import { CellphoneListComponent } from './show-list-article/cellphone-list/cellphone-list.component';
import { DesktopListComponent } from './show-list-article/desktop-list/desktop-list.component';
import { DockingStationListComponent } from './show-list-article/docking-station-list/docking-station-list.component';
import { GpuListComponent } from './show-list-article/gpu-list/gpu-list.component';
import { GraphicTabletListComponent } from './show-list-article/graphic-tablet-list/graphic-tablet-list.component';
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
import { AuthGaurdService } from './service/service-authGaurd/auth-gaurd.service';
import { CableCountComponent } from './count-article/cable-count/cable-count.component';
import { CellphoneCountComponent } from './count-article/cellphone-count/cellphone-count.component';
import { CpuCountComponent } from './count-article/cpu-count/cpu-count.component';
import { DesktopCountComponent } from './count-article/desktop-count/desktop-count.component';
import { DockingStationCountComponent } from './count-article/docking-station-count/docking-station-count.component';
import { GpuCountComponent } from './count-article/gpu-count/gpu-count.component';
import { GraphicTabletCountComponent } from './count-article/graphic-tablet-count/graphic-tablet-count.component';
import { TokenCountComponent } from './count-article/token-count/token-count.component';
import { HddCountComponent } from './count-article/hdd-count/hdd-count.component';
import { KeyboardCountComponent } from './count-article/keyboard-count/keyboard-count.component';
import { LaptopCountComponent } from './count-article/laptop-count/laptop-count.component';
import { MonitorCountComponent } from './count-article/monitor-count/monitor-count.component';
import { MouseCountComponent } from './count-article/mouse-count/mouse-count.component';
import { OperativeSystemCountComponent } from './count-article/operative-system-count/operative-system-count.component';
import { PowerSupplieCountComponent } from './count-article/power-supplie-count/power-supplie-count.component';
import { RamCountComponent } from './count-article/ram-count/ram-count.component';
import { SoftwareCountComponent } from './count-article/software-count/software-count.component';
import { SsdCountComponent } from './count-article/ssd-count/ssd-count.component';


const routes: Routes = [ 
  {path:"", component: WelcomeComponent},
  {path:"cpulist", component: CpuListComponent},
  {path:"registration", component: RegistrationComponent},
  {path:"cablelist", component: CableListComponent},
  {path:"cellphonelist", component: CellphoneListComponent},
  {path:"desktoplist", component: DesktopListComponent},
  {path:"dockingStationlist", component: DockingStationListComponent},
  {path:"gpulist", component: GpuListComponent},
  {path:"graficTabletlist", component: GraphicTabletListComponent},
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
  {path:"tokenlist", component: TokenListComponent},
  {path:"cableCount", component: CableCountComponent},
  {path:"cellphoneCount", component: CellphoneCountComponent},
  {path:"cpuCount", component: CpuCountComponent},
  {path:"desktopCount", component: DesktopCountComponent},
  {path:"dockingStationCount", component: DockingStationCountComponent},
  {path:"gpuCount", component: GpuCountComponent},
  {path:"graphicTableCount", component: GraphicTabletCountComponent},
  {path:"hddTableCount", component: HddCountComponent},
  {path:"keyboardTableCount", component: KeyboardCountComponent},
  {path:"laptopTableCount", component: LaptopCountComponent},
  {path:"monitorTableCount", component: MonitorCountComponent},
  {path:"mouseTableCount", component: MouseCountComponent},
  {path:"operativeSystemTableCount", component: OperativeSystemCountComponent},
  {path:"powerSupplieTableCount", component: PowerSupplieCountComponent},
  {path:"ramTableCount", component: RamCountComponent},
  {path:"softwareTableCount", component: SoftwareCountComponent},
  {path:"ssdTableCount", component: SsdCountComponent},
  {path:"tokenTableCount", component: TokenCountComponent}


] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
