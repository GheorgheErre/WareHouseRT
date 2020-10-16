import { Product } from 'src/app/pcObjects/product/product';
import { ServiceService } from 'src/app/service/service.service';

export abstract class ProductList {
    listProduct: Product[];
    listKeys:String[];
  constructor(protected service : ServiceService) { }

  findAllProduct(): void {
    this.service.findAll().subscribe(list =>{
      this.listProduct=list;
      this.listKeys=this.jsonToList(this.listProduct);
    })
   
  }

  jsonToList(json): any{
    return Object.keys(json);

  }
  jsonToListValue(json):any{
    return 
  }
}
