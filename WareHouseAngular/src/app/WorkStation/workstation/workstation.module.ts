import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkstationWelcomeComponent } from '../workstation-welcome/workstation-welcome.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserWorkstationComponent } from '../user-workstation/user-workstation.component';
import { CreateWorkstationComponent } from '../create-workstation/create-workstation.component';
import { AmministrazioneComponent } from '../office/first-floor/amministrazione/amministrazione.component';
import { DirErreGesComponent } from '../office/first-floor/dir-erre-ges/dir-erre-ges.component';
import { DirErreLabComponent } from '../office/first-floor/dir-erre-lab/dir-erre-lab.component';
import { DirErreProComponent } from '../office/first-floor/dir-erre-pro/dir-erre-pro.component';
import { DirErreTechComponent } from '../office/first-floor/dir-erre-tech/dir-erre-tech.component';
import { HrAndSalesComponent } from '../office/first-floor/hr-and-sales/hr-and-sales.component';
import { UffLabComponent } from '../office/first-floor/uff-lab/uff-lab.component';
import { UffProComponent } from '../office/first-floor/uff-pro/uff-pro.component';
import { ReceptionComponent } from '../office/ground-floor/reception/reception.component';
import { Uff2Component } from '../office/ground-floor/uff2/uff2.component';
import { Uff3Component } from '../office/ground-floor/uff3/uff3.component';
import { Uff1FirstFloorComponent } from '../office/first-floor/uff1-first-floor/uff1-first-floor.component';
import { Uff1GroundFloorComponent } from '../office/ground-floor/uff1-ground-floor/uff1-ground-floor.component';
import { WorkstationHeaderComponent } from '../office/workstation-header/workstation-header.component';
import { MapComponent } from '../map/map.component';
import { WarehouseModule } from 'src/app/Warehouse/warehouse/warehouse.module';



@NgModule({
  declarations: [
    WorkstationWelcomeComponent,
    UserWorkstationComponent,
    CreateWorkstationComponent,
    Uff2Component,
    ReceptionComponent,
    Uff3Component,
    DirErreGesComponent,
    AmministrazioneComponent,
    DirErreTechComponent,
    DirErreProComponent,
    HrAndSalesComponent,
    DirErreLabComponent,
    UffLabComponent,
    UffProComponent,
    Uff1FirstFloorComponent,
    Uff1GroundFloorComponent,
    WorkstationHeaderComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
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
    ReactiveFormsModule,
    WarehouseModule
  ],
  providers:[]
})
export class WorkstationModule { }
