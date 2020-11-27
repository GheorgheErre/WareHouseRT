import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Cable } from 'src/app/pcObjects/cable/cable';
import { Cellphone } from 'src/app/pcObjects/cellphone/cellphone';
import { Address } from 'src/app/pcObjects/ddt/address/address';
import { Bolla } from 'src/app/pcObjects/ddt/bolla/bolla';
import { Merchandise } from 'src/app/pcObjects/ddt/merchandise/merchandise';
import { Recipient } from 'src/app/pcObjects/ddt/recipient/recipient';
import { Desktop } from 'src/app/pcObjects/desktop/desktop';
import { DockingStation } from 'src/app/pcObjects/dockingStation/docking-station';
import { GraphicTablet } from 'src/app/pcObjects/graficTablet/grafic-tablet';
import { Keyboard } from 'src/app/pcObjects/keyBoard/key-board';
import { Laptop } from 'src/app/pcObjects/laptop/laptop';
import { Monitor } from 'src/app/pcObjects/monitor/monitor';
import { Mouse } from 'src/app/pcObjects/mouse/mouse';
import { Product } from 'src/app/pcObjects/product/product';
import { Token } from 'src/app/pcObjects/token/token';
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
import { BollaComponent } from '../bolla/bolla.component';

@Component({
  selector: 'app-form-bolla',
  templateUrl: './form-bolla.component.html',
  styleUrls: ['./form-bolla.component.scss'],
})
export class FormBollaComponent implements OnInit {

  @ViewChild(BollaComponent) bollaComponent: BollaComponent;

  bolla: Bolla = new Bolla();
  recipient: Recipient = new Recipient();
  merchandise: Merchandise = new Merchandise();
  address: Address = new Address();
  cause: String;
  annotazioni: String;
  goods: any = [];

  service: ServiceService;
  showProductList: Product[];
  productType: String;
  note: String;
  filtered: String;
  selectedProduct;

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
    this.riempiBolla();
  }


  showList(product) {
    this.productType = product;
    this.chooseService(product);
    this.findAllProduct();
  }

  // per le tabelle contenenti i prodotti da selezionare fitro solamente quelli che non sono già presso clienti
  findAllProduct(): void {
    this.service.findAll().subscribe(list => {
      if (list.length != 0) {
        this.showProductList = list.filter((product) => (!product.location.includes("Presso")));
      }
    })
  }

  // aggiungo il prodotto selezionato ad una lista di prodotti ancora modificabile prima di creare la bolla
  addProductToBolla(product) {
    if (this.goods.filter((p) => p.identifier == product.identifier).length > 0) {
      alert("Prodotto già aggiunto");
    }
    else {
      this.goods.push(product);
      this.bolla.goods.push(product);
      this.merchandise.nColli++;
    }
  }

  // do la possibilità di rimuovere un prodotto aggiunto alla lista provvisoria di prodotti da inserire nella bolla
  removeProduct(product) {
    this.goods = this.goods.filter((p) => p.identifier != product.identifier);
    this.bolla.goods = this.bolla.goods.filter((p) => p.identifier != product.identifier);
  }


  // creazione finale della bolla di trasporto: questo metodo richiama altri metodi di creazione
  creaBolla() {
    this.aggiornaLocationProdotti();
    this.incrementaDDTeStampa();
    this.scaricaBolla();
  }

  // aggiorno la location dei prodotti inseriti in bolla attribuendogli la location del cliente
  aggiornaLocationProdotti() {
    for (let i = 0; i < this.goods.length; i++) {
      let tmp = this.goods[i];
      tmp = this.removeType(tmp);
      this.chooseService(tmp.articleType);
      tmp.location = "Presso" + " " + this.recipient.name;
      tmp = this.addType(tmp);
      this.service.saveOrUpdate(tmp, this.note).subscribe(result => {
        console.log("ARTICLE CARICATO CON SUCCESSO");
      });
    }
  }

  // incremento il numero di bolla dell' anno in corso, salvando su database
  incrementaDDTeStampa() {
    this.ddtService.incrementaDDT().subscribe(result => {
      console.log("DDT INCREMENTATO CON SUCCESSO");
      this.bolla.numeroDDT = result.numero;
      this.bolla.anno = result.anno;
    })
  }

  // riempio l'oggetto bolla con i vari sottoOggetti con cui esso è creato (per avere il riempimento live)
  riempiBolla() {
    this.recipient.address = this.address;
    this.bolla.recipient = this.recipient;
    this.bolla.merchandise = this.merchandise;
    this.bolla.goods = [];

    //uso il servizio del server per prendere il numero di ddt da utilizzare
    this.ddtService.getNumeroDDT().subscribe(result => {
      this.bolla.numeroDDT = result.numero;
      this.bolla.anno = result.anno;
    })
  }

  scaricaBolla() {
    this.bollaComponent.htmlToPdf();
  }

  // setto il product per mostrargli i dettagli
  setDetailsProductInModal(product) {
    this.selectedProduct = this.removeType(product);
    delete this.selectedProduct.id;
  }

  // scelgo il servizio 
  chooseService(product) {
    switch (product) {
      case "Laptop":
        this.service = this.laptopService;
        break;
      case "Desktop":
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

  searchFunction() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByClassName(this.filtered)[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

}
