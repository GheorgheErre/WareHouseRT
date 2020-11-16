import { SignUpComponent } from './Homepage/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { AuthGaurdService } from './service/service-authGaurd/auth-gaurd.service';
import { WelcomeMenuComponent } from './Homepage/welcome-menu/welcome-menu.component';
import { WelcomeComponent } from './Homepage/welcome/welcome.component';
import { ArticleCardComponent } from './Warehouse/count-article/article-card/article-card.component';
import { CableListComponent } from './Warehouse/show-list-article/cable-list/cable-list.component';
import { CellphoneListComponent } from './Warehouse/show-list-article/cellphone-list/cellphone-list.component';
import { CpuListComponent } from './Warehouse/show-list-article/cpu-list/cpu-list.component';
import { DesktopListComponent } from './Warehouse/show-list-article/desktop-list/desktop-list.component';
import { DockingStationListComponent } from './Warehouse/show-list-article/docking-station-list/docking-station-list.component';
import { GpuListComponent } from './Warehouse/show-list-article/gpu-list/gpu-list.component';
import { GraphicTabletListComponent } from './Warehouse/show-list-article/graphic-tablet-list/graphic-tablet-list.component';
import { HddListComponent } from './Warehouse/show-list-article/hdd-list/hdd-list.component';
import { KeyboardListComponent } from './Warehouse/show-list-article/keyboard-list/keyboard-list.component';
import { LaptopListComponent } from './Warehouse/show-list-article/laptop-list/laptop-list.component';
import { MonitorListComponent } from './Warehouse/show-list-article/monitor-list/monitor-list.component';
import { MouseListComponent } from './Warehouse/show-list-article/mouse-list/mouse-list.component';
import { OperativeSystemListComponent } from './Warehouse/show-list-article/operative-system-list/operative-system-list.component';
import { PowerSupplieListComponent } from './Warehouse/show-list-article/power-supplie-list/power-supplie-list.component';
import { RamListComponent } from './Warehouse/show-list-article/ram-list/ram-list.component';
import { SoftwareListComponent } from './Warehouse/show-list-article/software-list/software-list.component';
import { SsdListComponent } from './Warehouse/show-list-article/ssd-list/ssd-list.component';
import { TokenListComponent } from './Warehouse/show-list-article/token-list/token-list.component';
import { WarehouseHomeComponent } from './Warehouse/warehouse-home/warehouse-home.component';
import { ListProductComponent } from './Warehouse/show-list-article/list-product/list-product.component';
import { LoginComponent } from './Homepage/login/login.component';
import { DashboardComponent } from './Warehouse/dashboard/dashboard.component';
import { WorkstationWelcomeComponent } from './WorkStation/workstation-welcome/workstation-welcome.component';
import { Uff1GroundFloorComponent } from './WorkStation/office/ground-floor/uff1-ground-floor/uff1-ground-floor.component';
import { UserWorkstationComponent } from './WorkStation/user-workstation/user-workstation.component';
import { Uff2Component } from './WorkStation/office/ground-floor/uff2/uff2.component';
import { ReceptionComponent } from './WorkStation/office/ground-floor/reception/reception.component';
import { Uff3Component } from './WorkStation/office/ground-floor/uff3/uff3.component';
import { AmministrazioneComponent } from './WorkStation/office/first-floor/amministrazione/amministrazione.component';
import { DirErreGesComponent } from './WorkStation/office/first-floor/dir-erre-ges/dir-erre-ges.component';
import { Uff1FirstFloorComponent } from './WorkStation/office/first-floor/uff1-first-floor/uff1-first-floor.component';
import { DirErreProComponent } from './WorkStation/office/first-floor/dir-erre-pro/dir-erre-pro.component';
import { HrAndSalesComponent } from './WorkStation/office/first-floor/hr-and-sales/hr-and-sales.component';
import { DirErreLabComponent } from './WorkStation/office/first-floor/dir-erre-lab/dir-erre-lab.component';
import { UffLabComponent } from './WorkStation/office/first-floor/uff-lab/uff-lab.component';
import { UffProComponent } from './WorkStation/office/first-floor/uff-pro/uff-pro.component';
import { DirErreTechComponent } from './WorkStation/office/first-floor/dir-erre-tech/dir-erre-tech.component';
import { HistoricWelcomeComponent } from './Historic/historic-welcome/historic-welcome.component';
import { HistoricDeleteListComponent } from './Historic/historic-delete/historic-delete-list/historic-delete-list.component';
import { HistoricMovementsListComponent } from './Historic/historic-movements/historic-movements-list/historic-movements-list.component';



const routes: Routes = [ 
  {path:"", component: WelcomeComponent},
  {path:"WorkstationWelcome",component: WorkstationWelcomeComponent},
  {path:"Dashboard", component: DashboardComponent},
  {path:"WarehouseHomeList", component: WarehouseHomeComponent},
  {path:"WarehouseHomeCount", component: WarehouseHomeComponent},
  {path:"SignUp", component: SignUpComponent},
  {path:"WelcomeMenu", component:WelcomeMenuComponent, canActivate : [AuthGaurdService]},
  {path:"cpulist", component: CpuListComponent},
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
  {path:"articleCount", component: ArticleCardComponent},
  {path:"productList", component: ListProductComponent},
  {path:"Login", component: LoginComponent},
  {path:"Ufficio1GroundFloor", component: Uff1GroundFloorComponent},
  {path:"Workstation", component: UserWorkstationComponent},
  {path:"Ufficio2GroundFloor", component: Uff2Component},
  {path:"Reception", component: ReceptionComponent},
  {path:"Ufficio3GroundFloor", component: Uff3Component},
  {path:"DirezioneErreGes", component: DirErreGesComponent},
  {path:"Amministrazione", component: AmministrazioneComponent},
  {path:"DirezioneErreTech", component: DirErreTechComponent},
  {path:"Ufficio1FirstFloor", component: Uff1FirstFloorComponent},
  {path:"DirezioneErrePro", component: DirErreProComponent},
  {path:"HRSales", component: HrAndSalesComponent},
  {path:"DirezioneErreLab", component: DirErreLabComponent},
  {path:"UfficioLab", component: UffLabComponent},
  {path:"UfficioPro", component: UffProComponent},
  {path:"HistoryWelcome", component: HistoricWelcomeComponent},
  {path:"HistoricDelete", component: HistoricDeleteListComponent},
  {path:"HistoricMovements", component: HistoricMovementsListComponent}
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
