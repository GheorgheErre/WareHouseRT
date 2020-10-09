import { ServiceService } from '../service/service.service';

export class ProductCount {
    countP: number;
    
    constructor(protected service : ServiceService) { }

    countProduct(): void {
      this.service.count().subscribe(count =>{
        this.countP=count;
      })
    }
}
