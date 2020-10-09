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
import { CpuListComponent } from './show-list-article/cpu-list/cpu-list.component';
import { GpuListComponent } from './show-list-article/gpu-list/gpu-list.component';
import { HddListComponent } from './show-list-article/hdd-list/hdd-list.component';
import { MotherBoardListComponent } from './show-list-article/mother-board-list/mother-board-list.component';
import { PowerSupplieListComponent } from './show-list-article/power-supplie-list/power-supplie-list.component';
import { RamListComponent } from './show-list-article/ram-list/ram-list.component';
import { SsdListComponent } from './show-list-article/ssd-list/ssd-list.component';
import { LoginComponent } from './login/login.component';
import { FormCPUComponent } from './form/form-cpu/form-cpu.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CableListComponent } from './show-list-article/cable-list/cable-list.component';
import { CellphoneListComponent } from './show-list-article/cellphone-list/cellphone-list.component';
import { DesktopListComponent } from './show-list-article/desktop-list/desktop-list.component';
import { DockingStationListComponent } from './show-list-article/docking-station-list/docking-station-list.component';
import { GraphicTabletListComponent } from './show-list-article/graphic-tablet-list/graphic-tablet-list.component';
import { KeyboardListComponent } from './show-list-article/keyboard-list/keyboard-list.component';
import { LaptopListComponent } from './show-list-article/laptop-list/laptop-list.component';
import { MonitorListComponent } from './show-list-article/monitor-list/monitor-list.component';
import { MouseListComponent } from './show-list-article/mouse-list/mouse-list.component';
import { OperativeSystemListComponent } from './show-list-article/operative-system-list/operative-system-list.component';
import { SoftwareListComponent } from './show-list-article/software-list/software-list.component';
import { TokenListComponent } from './show-list-article/token-list/token-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCPUComponent,
    CpuListComponent,
    GpuListComponent,
    HddListComponent,
    MotherBoardListComponent,
    PowerSupplieListComponent,
    RamListComponent,
    SsdListComponent,
    LoginComponent,
    RegistrationComponent,
    WelcomeComponent,
    RegistrationComponent,
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
    SignInComponent,
    SignUpComponent,
    LogoutComponent
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
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
