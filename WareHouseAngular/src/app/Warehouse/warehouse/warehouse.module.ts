import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from '../count-article/article-card/article-card.component';
import { CableCountComponent } from '../count-article/cable-count/cable-count.component';
import { CellphoneCountComponent } from '../count-article/cellphone-count/cellphone-count.component';
import { CpuCountComponent } from '../count-article/cpu-count/cpu-count.component';
import { DesktopCountComponent } from '../count-article/desktop-count/desktop-count.component';
import { DockingStationCountComponent } from '../count-article/docking-station-count/docking-station-count.component';
import { GpuCountComponent } from '../count-article/gpu-count/gpu-count.component';
import { GraphicTabletCountComponent } from '../count-article/graphic-tablet-count/graphic-tablet-count.component';
import { HddCountComponent } from '../count-article/hdd-count/hdd-count.component';
import { KeyboardCountComponent } from '../count-article/keyboard-count/keyboard-count.component';
import { LaptopCountComponent } from '../count-article/laptop-count/laptop-count.component';
import { MonitorCountComponent } from '../count-article/monitor-count/monitor-count.component';
import { MouseCountComponent } from '../count-article/mouse-count/mouse-count.component';
import { OperativeSystemCountComponent } from '../count-article/operative-system-count/operative-system-count.component';
import { PowerSupplieCountComponent } from '../count-article/power-supplie-count/power-supplie-count.component';
import { RamCountComponent } from '../count-article/ram-count/ram-count.component';
import { SoftwareCountComponent } from '../count-article/software-count/software-count.component';
import { SsdCountComponent } from '../count-article/ssd-count/ssd-count.component';
import { TokenCountComponent } from '../count-article/token-count/token-count.component';
import { CableListComponent } from '../show-list-article/cable-list/cable-list.component';
import { CellphoneListComponent } from '../show-list-article/cellphone-list/cellphone-list.component';
import { CpuListComponent } from '../show-list-article/cpu-list/cpu-list.component';
import { DesktopListComponent } from '../show-list-article/desktop-list/desktop-list.component';
import { DockingStationListComponent } from '../show-list-article/docking-station-list/docking-station-list.component';
import { GpuListComponent } from '../show-list-article/gpu-list/gpu-list.component';
import { GraphicTabletListComponent } from '../show-list-article/graphic-tablet-list/graphic-tablet-list.component';
import { HddListComponent } from '../show-list-article/hdd-list/hdd-list.component';
import { KeyboardListComponent } from '../show-list-article/keyboard-list/keyboard-list.component';
import { LaptopListComponent } from '../show-list-article/laptop-list/laptop-list.component';
import { MonitorListComponent } from '../show-list-article/monitor-list/monitor-list.component';
import { MouseListComponent } from '../show-list-article/mouse-list/mouse-list.component';
import { OperativeSystemListComponent } from '../show-list-article/operative-system-list/operative-system-list.component';
import { PowerSupplieListComponent } from '../show-list-article/power-supplie-list/power-supplie-list.component';
import { RamListComponent } from '../show-list-article/ram-list/ram-list.component';
import { SoftwareListComponent } from '../show-list-article/software-list/software-list.component';
import { SsdListComponent } from '../show-list-article/ssd-list/ssd-list.component';
import { TokenListComponent } from '../show-list-article/token-list/token-list.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [    
    CpuListComponent,
    GpuListComponent,
    HddListComponent,
    PowerSupplieListComponent,
    RamListComponent,
    SsdListComponent,
    CableListComponent,
    CellphoneListComponent,
    DesktopListComponent,
    DockingStationListComponent,
    GraphicTabletListComponent,
    KeyboardListComponent,
    LaptopListComponent,
    MonitorListComponent,
    MouseListComponent,
    OperativeSystemListComponent,
    SoftwareListComponent,
    TokenListComponent,
    CableCountComponent,
    CellphoneCountComponent,
    CpuCountComponent,
    DesktopCountComponent,
    DockingStationCountComponent,
    GpuCountComponent,
    GraphicTabletCountComponent,
    HddCountComponent,
    KeyboardCountComponent,
    LaptopCountComponent,
    MonitorCountComponent,
    MouseCountComponent,
    OperativeSystemCountComponent,
    PowerSupplieCountComponent,
    RamCountComponent,
    SoftwareCountComponent,
    SsdCountComponent,
    TokenCountComponent,
    ArticleCardComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    
  ]
})
export class WarehouseModule { }
