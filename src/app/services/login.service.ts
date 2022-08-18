import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url!: string;

  constructor(private http: HttpClient) { }
  logIn(data: any) {
    this.http.post<any>(this.url, data)
    console.log(data);
  }

}


// import { Observable } from 'rxjs';


// import { IProduct } from '../models/product';


// export class ProductService {
//     url = 'https://fakestoreapi.com/products'
//     options = { params: new HttpParams().append('limit', 10) }


//     getProducts(): Observable<IProduct[]> {
//         return this.http.get<IProduct[]>(this.url, this.options)
//     }
//     getProduct(id: number): Observable<IProduct> {
//         return this.http.get<IProduct>(this.url + '/' + id)
//     }
// }
