import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop/shop.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.scss'
})
export class BottomComponent implements OnInit {
      shop: any ;

    constructor(private service: ShopService){}

    ngOnInit(){
      this.getAllShop()
    }

    getAllShop(){
      this.service.getAllShop().subscribe(
        (data: Data) => {
          this.shop = data;
        }
        
      ); 
    }
}
