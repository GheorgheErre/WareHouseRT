import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HistoricWelcomeComponent } from '../historic-welcome/historic-welcome.component';
import { HistoricDeleteListComponent } from '../historic-delete/historic-delete-list/historic-delete-list.component';
import { HistoricMovementsListComponent } from '../historic-movements/historic-movements-list/historic-movements-list.component';
import { HomepageModule } from 'src/app/Homepage/homepage/homepage.module';



@NgModule({
  declarations: [
    HistoricWelcomeComponent,
    HistoricDeleteListComponent,
    HistoricMovementsListComponent
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
    HomepageModule,
  ]
})
export class HistoricModule { }
