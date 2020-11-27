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
  entity: Article;
  note: String;

  laptop: Laptop = new Laptop();
  desktop: Desktop = new Desktop();
  monitor: Monitor = new Monitor();
  keyboard: Keyboard = new Keyboard();
  mouse: Mouse = new Mouse();
  cable: Cable = new Cable();
  cellphone: Cellphone = new Cellphone();
  graphicTablet: GraphicTablet = new GraphicTablet();
  dockingStation: DockingStation = new DockingStation();
  token: Token = new Token();

  articleType: String;
  service: ServiceService;

  userName: string;
  userNumber: string;
  articleToDelete: Article;

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
      if (data === null) {
        this.workstation.office = this.office;
        this.workstation.numero = this.numero;
        this.workstation.articles = [];
        this.updateWorkstation();
      }
      else{
        this.workstation = this.removeType(data);
      }
    
    })
  }

  assignWorkstation() {
    this.workstation.userNumber = this.userNumber;
    this.workstation.userName = this.userName;
    this.updateWorkstation();
    document.getElementById('assignWorkstationMoadal').click();
  }

  disassignWorkstation() {
    this.workstation.userName = "";
    this.workstation.userNumber = "";
    this.updateWorkstation();
  }

  setArticleTodelete(article){
    this.articleToDelete = article;
  }

  setArticleToMove(article){
    this.chooseService(article.articleType);
    this.entity = article;
  }

  // show the list of a selected article form warehouse
  showList(article) {
    this.articleType = article;
    this.chooseService(article);
    this.findAllProduct();
  }

  // metodo che richiede la lista di un determinato tipo di articolo
  findAllProduct(): void {
    this.service.findAll().subscribe(list => {
      this.showWarehouseList = list.filter((product) => product.location === "magazzino");
    })
  }

  articleDetails(article) {
    let detailsArticleString = JSON.stringify(article);
    this.entity = JSON.parse(detailsArticleString)
    delete this.entity.id;
  }


  // aggiungi nuovo articolo alla mia workstation
  addArticleFromWarehouse(article) {
    this.entity = article;
    this.entity.location = "workstation" + " " +  this.workstation.office + " " + this.workstation.numero;

    this.service.moveFromWareHouse(this.entity, this.note).subscribe(result => {
      console.log("ARTICLE SPOSTATO DA WAREHOUSE CON SUCCESSO")
    });

    this.workstation.articles.push(this.entity);
    this.showList(this.articleType);
    this.updateWorkstation();
  }

  // add a new article from outside
  addArticleFromOutside(article, articleType) {
    this.chooseService(articleType);
    this.entity = article.product;
    this.note = article.note;
    this.entity.location = "workstation" + " " +  this.workstation.office + " " + this.workstation.numero;
    this.entity = this.addType(this.entity);

    this.service.saveOrUpdate(this.entity, this.note).subscribe(result => {
      console.log("ARTICLE CARICATO CON SUCCESSO");
      this.workstation.articles.push(result);
      this.updateWorkstation();
    }); 
  }

  prepareForm(articleType) {
    this.chooseService(articleType);
    this.articleType = articleType;
  }

  // delete article from workstation and from anywhere
  deleteArticle(article) {
    this.chooseService(article.articleType);
    this.entity = this.addType(article);
   
    this.service.delete(this.entity, this.note).subscribe(result => {
      console.log("ARTICLE ELIMINATO CON SUCCESSO")
    });
    this.workstation.articles = this.workstation.articles.filter((a) => a.identifier != article.identifier);
    this.updateWorkstation();
  }

  // move article from workstation to warehouse
  moveToWarehouse() {
    this.entity = this.addType(this.entity);
    this.entity.location = "magazzino";

    this.service.moveToWareHouse(this.entity, this.note).subscribe(result => {
      console.log("ARTICLE SPOSTATO IN WAREHOUSE CON SUCCESSO")
    });
    document.getElementById('moveToWarehouseModal').click();

    this.workstation.articles = this.workstation.articles.filter((a) => a.identifier != this.entity.identifier);
    this.updateWorkstation();
  }



  //salvo la mia workstation aggiornando quindi la tabella di articoli
  updateWorkstation() {
    this.workstation = this.addType(this.workstation);
    this.workstationService.saveOrUpdate(this.workstation).subscribe(result => {
      console.log("ARTICLE CARICATO CON SUCCESSO")
    });
    if(this.service !== undefined){
      this.findAllProduct();
    }
    
  }

  chooseService(article) {
    switch (article) {
      case "Laptop":
        this.entity = this.laptop;
        this.service = this.laptopService;
        break;
      case "Desktop":
        this.entity = this.desktop;;
        this.service = this.desktopService;
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

  removeType(json) {
    let workstationJSONString = JSON.stringify(json);
    workstationJSONString = workstationJSONString.split("@type").join("articleType");
    return JSON.parse(workstationJSONString);
  }

  addType(json) {
    let workstationJSONString = JSON.stringify(json);
    workstationJSONString = workstationJSONString.split("articleType").join("@type");
    return JSON.parse(workstationJSONString);
  }

}
