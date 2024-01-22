import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  getAllShop(): Observable<Data>{
    return this.http.get<Data>("https://localhost:7186/api/Shop/GetById?Id=1")
  }

 
}
