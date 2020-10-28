import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/pcObjects/article/article';
import { Cable } from 'src/app/pcObjects/cable/cable';
import { Cellphone } from 'src/app/pcObjects/cellphone/cellphone';
import { Desktop } from 'src/app/pcObjects/desktop/desktop';
import { DockingStation } from 'src/app/pcObjects/dockingStation/docking-station';
import { GraphicTablet } from 'src/app/pcObjects/graficTablet/grafic-tablet';
import { Keyboard } from 'src/app/pcObjects/keyBoard/key-board';
import { Laptop } from 'src/app/pcObjects/laptop/laptop';
import { Monitor } from 'src/app/pcObjects/monitor/monitor';
import { Mouse } from 'src/app/pcObjects/mouse/mouse';
import { Product } from 'src/app/pcObjects/product/product';
import { Token } from 'src/app/pcObjects/token/token';
import { Workstation } from 'src/app/pcObjects/workStation/workstation';
import { CableService } from 'src/app/service/service-cable/cable.service';
import { CellphoneService } from 'src/app/service/service-cellphone/cellphone-service.service';
import { DesktopService } from 'src/app/service/service-desktop/desktop-service.service';
import { DockingStationService } from 'src/app/service/service-docking-station/docking-station-service.service';
import { GraphicTabletService } from 'src/app/service/service-graphic-tablet/graphic-tablet-service.service';
import { KeyboardService } from 'src/app/service/service-keyboard/keyboard-service.service';
import { LaptopService } from 'src/app/service/service-laptop/laptop-service.service';
import { MonitorService } from 'src/app/service/service-monitor/monitor-service.service';
import { MouseService } from 'src/app/service/service-mouse/mouse-service.service';
import { TokenService } from 'src/app/service/service-token/token.service';
import { WorkStationService } from 'src/app/service/service-workStation/work-station.service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-create-workstation',
  templateUrl: './create-workstation.component.html',
  styleUrls: ['./create-workstation.component.scss']
})
export class CreateWorkstationComponent implements OnInit {

  articleType: any;
  workstation: Workstation = new Workstation();
  workstationArticles: Article[] = [];
  showWarehouseList: Article[];
  columns: any;
  rows: any;
  flag: boolean = false;
  length: number;
  entity: Article;

  constructor(private monitorService: MonitorService,
    private laptopService: LaptopService,
    private desktopService: DesktopService,
    private keyboardService: KeyboardService,
    private cableService: CableService,
    private cellphoneService: CellphoneService,
    private graphicTabletService: GraphicTabletService,
    private tokenService: TokenService,
    private mouseService: MouseService,
    private dockingStationService: DockingStationService,
    private workstationService: WorkStationService) { }

  ngOnInit(): void {
  }

  showList() {
    switch (this.articleType) {
      case "laptop":
        this.findAllProduct(this.laptopService);
        this.entity = new Laptop();
        break;
      case "dektop":
        this.findAllProduct(this.desktopService);
        this.entity = new Desktop();
        break;
      case "monitor":
        this.findAllProduct(this.monitorService);
        this.entity = new Monitor();
        break;
      case "keyboard":
        this.findAllProduct(this.keyboardService);
        this.entity = new Keyboard();
        break;
      case "mouse":
        this.findAllProduct(this.mouseService);
        this.entity = new Mouse();
        break;
      case "cable":
        this.findAllProduct(this.cableService);
        this.entity = new Cable();
        break;
      case "cellphone":
        this.findAllProduct(this.cellphoneService);
        this.entity = new Cellphone();
        break;
      case "token":
        this.findAllProduct(this.tokenService);
        this.entity = new Token();
        break;
      case "graphicTablet":
        this.findAllProduct(this.graphicTabletService);
        this.entity = new GraphicTablet();
        break;
      case "dockingStation":
        this.findAllProduct(this.dockingStationService);
        this.entity = new DockingStation();
        break;
    }
  }

  findAllProduct(service: ServiceService): void {
    service.findAll().subscribe(list => {
      //this.listProduct = list;
      this.showWarehouseList = list.filter((product) => product.location === "magazzino");
      this.columns = this.jsonToList(this.showWarehouseList[0]);
      this.rows = this.jsonToListValue(this.showWarehouseList);
    })
  }


  jsonToList(json): any {
    return Object.keys(json);

  }
  jsonToListValue(value): any {
    let keys = Object.keys(value[0]);
    let tmp: String[][] = [];
    let i = 0;

    for (let entry of value) {
      console.log(keys.map(k => entry[k]));
      tmp[i] = keys.map(k => entry[k]);
      i++;
    }
    return tmp;
  }

  addArticle(article) {
    if (!this.flag) {
      this.flag = true;
    }

    //let article : Article[];
    this.entity = this.showWarehouseList.filter((a) => a.identifier === article[1])[0];
    this.entity.location = "workstation";
    this.length = this.workstationArticles.push(this.entity);
  }

  createWorkstation() {
    this.workstation.articles = this.workstationArticles;
    this.workstation.officeLocation = "direzione";
    this.workstation.numero = 1;
    this.workstation.user = "74";
    this.workstationService.saveOrUpdate(this.workstation).subscribe(result => {
      console.log("ARTICLE CARICATO CON SUCCESSO"),
        this.reloadPage();
    });
  }

  reloadPage() {
    window.location.reload();
  }


}
