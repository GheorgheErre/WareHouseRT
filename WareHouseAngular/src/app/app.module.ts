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
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { WelcomeComponent } from './welcome/welcome.component';

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
    LoginsuccessComponent,
    WelcomeComponent
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
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
