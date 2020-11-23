import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-bolla',
  templateUrl: './bolla.component.html',
  styleUrls: ['./bolla.component.scss']
})
export class BollaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  htmlToPdf() {
    var data = document.getElementById('pdfSink');

    html2canvas(data).then(canvas => {    
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });   
    
}


}
