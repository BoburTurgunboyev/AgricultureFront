import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../../services/productservice/productservice.service';
import { Serv } from '../../models/productservice';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrl: './dairy.component.scss'
})
export class DairyComponent implements OnInit {
  product:any;
  constructor(private service:ProductserviceService){}

  ngOnInit(){
    this.getallproductservice()
  }

  getallproductservice(){
    this.service.getallproducts().subscribe(
      (data:Serv)=>{
        this.product=data;

      }
    );
  }

}
