import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakerapi.it/api/v2/products';

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<{ data: Product[] }> {
    return this.http.get<{ data: Product[] }>(`${this.apiUrl}?_quantity=10&_taxes=12&_categories_type=uuid`);
  }
}
