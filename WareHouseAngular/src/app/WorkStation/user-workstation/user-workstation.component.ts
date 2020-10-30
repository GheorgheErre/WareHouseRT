import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEraser, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
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
  selector: 'app-user-workstation',
  templateUrl: './user-workstation.component.html',
  styleUrls: ['./user-workstation.component.scss']
})
export class UserWorkstationComponent implements OnInit {

  faEraser = faEraser;
  faPen = faPen;
  faPlus = faPlus;
  office: string;
  numero: any;
  workstation = new Workstation();
  showWarehouseList: Article[];
  columnsWorkstation: any;
  rowsWorkstation: any;
  columnsArticle: any;
  rowsArticle: any[];
  entity: Article;

  laptop : Laptop = new Laptop();
  desktop : Desktop = new Desktop();
  monitor : Monitor = new Monitor();
  keyboard : Keyboard = new Keyboard();
  mouse : Mouse = new Mouse();
  cable : Cable = new Cable();
  cellphone : Cellphone = new Cellphone();
  graphicTablet : GraphicTablet = new GraphicTablet();
  dockingStation : DockingStation = new DockingStation();
  token : Token = new Token();

  articleType: any;
  service : ServiceService;

  constructor(private router: Router,
    private workstationService: WorkStationService,
    private monitorService: MonitorService,
    private laptopService: LaptopService,
    private desktopService: DesktopService,
    private keyboardService: KeyboardService,
    private cableService: CableService,
    private cellphoneService: CellphoneService,
    private graphicTabletService: GraphicTabletService,
    private tokenService: TokenService,
    private mouseService: MouseService,
    private dockingStationService: DockingStationService) {
    this.office = sessionStorage.getItem("ufficio_workstation");
    this.numero = sessionStorage.getItem("numero_workstation");
  }

  ngOnInit(): void {
    this.workstationService.findByOfficeAndNumero(this.office, this.numero).subscribe(data => {
      this.workstation = data;
      if (this.workstation.articles.length != 0) {
        this.columnsWorkstation = this.jsonToList(this.workstation.articles[0]);
        this.rowsWorkstation = this.jsonToListValue(this.workstation.articles);
      }
    })
  }

  showList(article) {
    this.chooseService(article);
    this.findAllProduct(this.service);
  }

  // metodo che richiede la lista di un determinato tipo di articolo
  findAllProduct(service: ServiceService): void {
    service.findAll().subscribe(list => {
      this.showWarehouseList = list.filter((product) => product.location === "magazzino");
      this.columnsArticle = this.jsonToList(this.showWarehouseList[0]);
      this.rowsArticle = this.jsonToListValue(this.showWarehouseList);
    })
  }

  articleDetails(article) {
    /*this.entity = article;
    this.rowsArticle = this.jsonToList(this.workstation.articles.filter((a) => a.identifier === article[1])[0]);
    this.rowsArticle[0] = "Type";*/
    this.entity = this.workstation.articles.filter((a) => a.identifier === article[1])[0];
  }


  // aggiungi nuovo articolo alla mia workstation
  addArticle(article) {
    this.entity = this.showWarehouseList.filter((a) => a.identifier === article[1])[0];
    this.entity.location = "workstation";
    this.workstation.articles.push(this.entity);
    this.updateWorkstation();
  }

  addArticleFromOutside(article){
    this.chooseService(article);
    this.entity.location = "workstation";
    this.entity = this.entity.toJSON();
    this.workstation.articles.push(this.entity);
    this.updateWorkstation();
  }

  //prepareForm(article){
    //this.chooseService(article);
  //}


  deleteArticle(article) {
    this.chooseService(article[0]);
    this.entity = this.workstation.articles.filter((a) => a.identifier === article[1])[0];

    this.service.delete(this.entity).subscribe(result => {
      console.log("ARTICLE ELIMINATO CON SUCCESSO")
    });

    this.workstation.articles = this.workstation.articles.filter((a) => a.identifier != article[1]);
    this.updateWorkstation();
  }

  moveToWarehouse(article) {
    this.chooseService(article[0]);
    this.entity = this.workstation.articles.filter((a) => a.identifier === article[1])[0];
    this.entity.location = "magazzino";

    this.service.saveOrUpdate(this.entity).subscribe(result => {
      console.log("ARTICLE CARICATO CON SUCCESSO")
    });

    this.workstation.articles = this.workstation.articles.filter((a) => a.identifier != article[1]);
    this.updateWorkstation();
  }



  //salvo la mia workstation aggiornando quindi la tabella di articoli
  updateWorkstation() {
    this.workstationService.saveOrUpdate(this.workstation).subscribe(result => {
      console.log("ARTICLE CARICATO CON SUCCESSO"),
        this.reloadPage();
    });
  }

  // prendo le chiavi del JSON per generate gli headers della tabella
  jsonToList(json): any {
    return Object.keys(json);

  }

  // prendo i valori dei JSON per generare le righe della tabella
  jsonToListValue(value): any {
    if (value.length >= 0) {
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

    let keys = Object.keys(value);
    return keys.map(k => value[k]);
  }

  reloadPage() {
    window.location.reload();
  }

  chooseService(article) {
    switch (article) {
      case "Laptop":
        this.entity = this.laptop;
        this.service = this.laptopService;
        break;
      case "Dektop":
        this.entity = this.desktop;;
        this.service =  this.desktopService;
        break;
      case "Monitor":
        this.entity = this.monitor;
        this.service = this.monitorService;
        break;
      case "Keyboard":
        this.entity = this.keyboard;
        this.service = this.keyboardService;
        break;
      case "Mouse":
        this.entity = this.mouse;
        this.service = this.mouseService;
        break;
      case "Cable":
        this.entity = this.cable;
        this.service = this.cableService;
        break;
      case "Cellphone":
        this.entity = this.cellphone;
        this.service = this.cellphoneService;
        break;
      case "Token":
        this.entity = this.token;
        this.service = this.tokenService;
        break;
      case "GraphicTablet":
        this.entity = this.graphicTablet;
        this.service = this.graphicTabletService;
        break;
      case "DockingStation":
        this.entity = this.dockingStation;
        this.service = this.dockingStationService;
        break;
    }
  }

}
