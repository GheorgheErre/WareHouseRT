import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormCPUComponent } from './form/form-cpu/form-cpu.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomepageModule } from './Homepage/homepage/homepage.module';
import { WarehouseModule } from './Warehouse/warehouse/warehouse.module';
import { PopperDirective } from './popper.directive';
import { WorkstationModule } from './WorkStation/workstation/workstation.module';
import { UserWorkStationComponent } from './WorkStation/user-work-station/user-work-station.component';
import { UserWorkstationComponent } from './WorkStation/user-workstation/user-workstation.component';
import { OfficeComponent } from './WorkStation/office/office.component';


@NgModule({
  declarations: [
    AppComponent,
    FormCPUComponent,
    PopperDirective,
    UserWorkStationComponent,
    UserWorkstationComponent,
    OfficeComponent

  ],
  imports: [
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
    HomepageModule,
    WarehouseModule,
    WorkstationModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
