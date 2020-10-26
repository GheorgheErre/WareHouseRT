import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/pcObjects/article/article';
import { Product } from 'src/app/pcObjects/product/product';
import { Workstation } from 'src/app/pcObjects/workStation/workstation';
import { DesktopService } from 'src/app/service/service-desktop/desktop-service.service';
import { KeyboardService } from 'src/app/service/service-keyboard/keyboard-service.service';
import { LaptopService } from 'src/app/service/service-laptop/laptop-service.service';
import { MonitorService } from 'src/app/service/service-monitor/monitor-service.service';
import { MouseService } from 'src/app/service/service-mouse/mouse-service.service';
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
  workstationArticles : Article[] = [];
  showWarehouseList: Article[];
  columns : any;
  rows : any;
  flag : boolean = false;
  length : number;

  constructor(private monitorService: MonitorService,
    private laptopService: LaptopService,
    private desktopService: DesktopService,
    private keyboardService: KeyboardService,
    private mouseService: MouseService,
    private workstationService : WorkStationService) { }

  ngOnInit(): void {
  }

  showList() {
    switch (this.articleType) {
      case "laptop":
        this.findAllProduct(this.laptopService);
        break;
      case "dektop":
        this.findAllProduct(this.desktopService);
        break;
      case "monitor":
        this.findAllProduct(this.monitorService);
        break;
      case "keyboard":
        this.findAllProduct(this.keyboardService);
        break;
      case "mouse":
        this.findAllProduct(this.mouseService);
        break;
    }
  }

  findAllProduct(service: ServiceService): void {
    service.findAll().subscribe(list => {
      //this.listProduct = list;
      this.showWarehouseList = list.filter((product) => product.location === "magazzino");
      this.columns = this.jsonToList(list[0]);
      this.rows = this.jsonToListValue(list);
    })
  }


  jsonToList(json): any {
    return Object.keys(json);

  }
  jsonToListValue(value): any {
    let keys = Object.keys(value[0]);
    let tmp : String[][] = [];
    let i = 0;
    
    for(let entry of value){
    console.log(keys.map(k => entry[k]));
    tmp[i] = keys.map(k => entry[k]);
    i++;
    }
    return tmp;
  }

  addArticle(entity){
    if(!this.flag){
      this.flag = true;
    }

    let article : Article[];
    article = this.showWarehouseList.filter((a) => a.identifier === entity[0]);
    this.length = this.workstationArticles.push(article[0]);
  }

  createWorkstation(){
    this.workstation.articles = this.workstationArticles;
    this.workstationService.saveOrUpdate(this.workstation).subscribe(result => {
      console.log("ARTICLE CARICATO CON SUCCESSO"),
        this.reloadPage();
    });
  }

  reloadPage() {
    window.location.reload();
  }


}
