import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/pcObjects/ddt/address/address';
import { Bolla } from 'src/app/pcObjects/ddt/bolla/bolla';
import { Merchandise } from 'src/app/pcObjects/ddt/merchandise/merchandise';
import { Recipient } from 'src/app/pcObjects/ddt/recipient/recipient';
import { Product } from 'src/app/pcObjects/product/product';
import { CableService } from 'src/app/service/service-cable/cable.service';
import { CellphoneService } from 'src/app/service/service-cellphone/cellphone-service.service';
import { DdtService } from 'src/app/service/service-ddt/ddt.service';
import { DesktopService } from 'src/app/service/service-desktop/desktop-service.service';
import { DockingStationService } from 'src/app/service/service-docking-station/docking-station-service.service';
import { GraphicTabletService } from 'src/app/service/service-graphic-tablet/graphic-tablet-service.service';
import { KeyboardService } from 'src/app/service/service-keyboard/keyboard-service.service';
import { LaptopService } from 'src/app/service/service-laptop/laptop-service.service';
import { MonitorService } from 'src/app/service/service-monitor/monitor-service.service';
import { MouseService } from 'src/app/service/service-mouse/mouse-service.service';
import { TokenService } from 'src/app/service/service-token/token.service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-form-bolla',
  templateUrl: './form-bolla.component.html',
  styleUrls: ['./form-bolla.component.scss'],
  animations: [
    trigger(
      'openBolla', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('0.5s ease-out', 
                    style({ height: 0, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 0, opacity: 1 }),
            animate('0.5s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class FormBollaComponent implements OnInit {

  bolla: Bolla = new Bolla();
  recipient: Recipient = new Recipient();
  merchandise: Merchandise = new Merchandise();
  address: Address = new Address();
  cause: String;
  annotazioni: String;
  goods: Product[] = [];
  service: ServiceService;
  showProductList: Product[];
  productType: String;
  bollaCreata : boolean = false;
  note: String;

  constructor(private router: Router,
    private monitorService: MonitorService,
    private laptopService: LaptopService,
    private desktopService: DesktopService,
    private keyboardService: KeyboardService,
    private cableService: CableService,
    private cellphoneService: CellphoneService,
    private graphicTabletService: GraphicTabletService,
    private tokenService: TokenService,
    private mouseService: MouseService,
    private dockingStationService: DockingStationService,
    private ddtService: DdtService) {
  }

  ngOnInit(): void {
  }

  showList(product) {
    this.productType = product;
    this.chooseService(product);
    this.findAllProduct();
  }

  findAllProduct(): void {
    this.service.findAll().subscribe(list => {
      this.showProductList = list;
    })
  }


  addProductToBolla(product) {
    product.location = "Presso" + " " + this.recipient.name;
    this.service.saveOrUpdate(product, this.note).subscribe(result => {
      console.log("ARTICLE CARICATO CON SUCCESSO");
    }); 
    this.goods.push(product);
    this.merchandise.nColli++;
  }

  incrementaDDT(){
    this.ddtService.incrementaDDT().subscribe(result => {
      console.log("DDT INCREMENTATO CON SUCCESSO");
      this.bolla.numeroDDt = result.numero;
      this.bolla.anno = result.anno;
    })
  }


  creaBolla() {
    this.incrementaDDT();

    this.recipient.address = this.address;
    this.bolla.recipient = this.recipient;
    this.bolla.merchandise = this.merchandise;
    this.bolla.goods = this.goods;
    this.bollaCreata = true;
  }


  chooseService(product) {
    switch (product) {
      case "Laptop":
        this.service = this.laptopService;
        break;
      case "Dektop":
        this.service = this.desktopService;
        break;
      case "Monitor":
        this.service = this.monitorService;
        break;
      case "Keyboard":
        this.service = this.keyboardService;
        break;
      case "Mouse":
        this.service = this.mouseService;
        break;
      case "Cable":
        this.service = this.cableService;
        break;
      case "Cellphone":
        this.service = this.cellphoneService;
        break;
      case "Token":
        this.service = this.tokenService;
        break;
      case "GraphicTablet":
        this.service = this.graphicTabletService;
        break;
      case "DockingStation":

        this.service = this.dockingStationService;
        break;
    }
  }

}
