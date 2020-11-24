import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Input } from '@angular/core';
import { Bolla } from 'src/app/pcObjects/ddt/bolla/bolla';


@Component({
  selector: 'app-bolla',
  templateUrl: './bolla.component.html',
  styleUrls: ['./bolla.component.scss']
})
export class BollaComponent implements OnInit {

  @Input() bolla: Bolla; 
  dateNow : Date = new Date();
  formatDate : String = 'dd/MM/yyyy';

  constructor() { }

  ngOnInit(): void {
    console.log(this.bolla);
  }

  htmlToPdf() {
    var data = document.getElementById('pdfSink');

    html2canvas(data).then(canvas => {    
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/jpeg', 1);
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;  
      pdf.addImage(contentDataURL, 'JPEG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });   
    
}


}
