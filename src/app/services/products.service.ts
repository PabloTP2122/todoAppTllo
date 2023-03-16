import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Product } from '../models/product.model';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //private apiUrl = 'https://api.escuelajs.co/api/v1/products';
  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';
  constructor(
    private http: HttpClient
  ) { }

  //getAllProducts(offset?: number, limit?: number)
  getAllProducts(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(this.apiUrl, { params })
      .pipe(
        retry(3)
      );
  }
  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.InternalServerError) {
            return throwError('Algo esta fallando en el servidor');
          }
          if (error.status === HttpStatusCode.NotFound) {
            return throwError('Este producto no existe');
          }
          if (error.status === HttpStatusCode.Unauthorized) {
            return throwError('Usted no tiene autorización');
          }
          return throwError('Ups algo salio mal');
        })
      )
  }
}
