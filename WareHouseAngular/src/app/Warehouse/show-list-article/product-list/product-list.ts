import { Product } from 'src/app/pcObjects/product/product';
import { ServiceService } from 'src/app/service/service.service';

export abstract class ProductList {
    listProduct: Product[];
    listKeys:String[];
    //product : Product;
  constructor(protected service : ServiceService) { }

  findAllProduct(): void {
    this.service.findAll().subscribe(list =>{
      this.listProduct=list;
      this.listKeys=this.jsonToList(this.listProduct);
    })
   
  }

  saveProduct(product : Product){
    this.service.save(product).subscribe(result => console.log("ARTICLE CARICATO CON SUCCESSO"));
  }

  deleteProduct(product: Product){
    this.service.delete(product).subscribe(result => console.log("ARTICLE ELIMINATO CON SUCCESSO"));
  }

  updateProduct(product: Product){
    this.service.update(product).subscribe(result => console.log("ARTICLE AGGIORNATO CON SUCCESSO"));
  }

  jsonToList(json): any{
    return Object.keys(json);

  }
  jsonToListValue(json):any{
    return 
  }
}
