import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CpuService } from 'src/app/service/service-cpu/cpu.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'cpu-count',
  templateUrl: './cpu-count.component.html',
  styleUrls: ['./cpu-count.component.scss']
})
export class CpuCountComponent extends ProductCount implements OnInit {

  constructor(private cpuService: CpuService, private route: ActivatedRoute,
    private router: Router) {
    super(cpuService);
  }

  ngOnInit(): void {
    this.countProduct();
  }

  showList():void{
    const navigationExtras: NavigationExtras = {state: {data: 'cpu'}};
    this.router.navigate(['/productList', navigationExtras ])
  }

}
