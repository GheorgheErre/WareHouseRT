import { Component, OnInit } from '@angular/core';
import { CableCountComponent } from '../cable-count/cable-count.component';
import { CellphoneCountComponent } from '../cellphone-count/cellphone-count.component';
import { CpuCountComponent } from '../cpu-count/cpu-count.component';
import { DesktopCountComponent } from '../desktop-count/desktop-count.component';
import { DockingStationCountComponent } from '../docking-station-count/docking-station-count.component';
import { GpuCountComponent } from '../gpu-count/gpu-count.component';
import { GraphicTabletCountComponent } from '../graphic-tablet-count/graphic-tablet-count.component';
import { HddCountComponent } from '../hdd-count/hdd-count.component';
import { KeyboardCountComponent } from '../keyboard-count/keyboard-count.component';
import { LaptopCountComponent } from '../laptop-count/laptop-count.component';
import { MonitorCountComponent } from '../monitor-count/monitor-count.component';
import { MouseCountComponent } from '../mouse-count/mouse-count.component';
import { OperativeSystemCountComponent } from '../operative-system-count/operative-system-count.component';
import { PowerSupplieCountComponent } from '../power-supplie-count/power-supplie-count.component';
import { RamCountComponent } from '../ram-count/ram-count.component';
import { SoftwareCountComponent } from '../software-count/software-count.component';
import { SsdCountComponent } from '../ssd-count/ssd-count.component';
import { TokenCountComponent } from '../token-count/token-count.component';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  cards = [CableCountComponent, CellphoneCountComponent, CpuCountComponent, DesktopCountComponent, DockingStationCountComponent, 
    GpuCountComponent, GraphicTabletCountComponent, HddCountComponent, KeyboardCountComponent, LaptopCountComponent, MonitorCountComponent
    , MouseCountComponent, OperativeSystemCountComponent, PowerSupplieCountComponent, RamCountComponent, SoftwareCountComponent, SsdCountComponent, TokenCountComponent];
  cardName: String;

  constructor() { }
  ngOnInit(): void {
  }


}
