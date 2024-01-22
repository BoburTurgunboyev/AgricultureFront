import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serv } from '../../models/productservice';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient ) { }

  getallproducts():Observable<Serv>{
    return this.http.get<Serv>("https://localhost:7186/api/ProductService/GetByIdProductService?id=2")
  }
}
