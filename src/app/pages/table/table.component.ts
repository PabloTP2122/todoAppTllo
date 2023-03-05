import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {


  //Instanciado de columnas
  columns: string[] = ['id', 'Producto', 'Precio', 'Imagen'];
  total = 0;

  constructor(
    private productsService: ProductsService
  ) {
  }
  products: Product[] = [];
  offset = 0;
  limit = 10;

  ngOnInit(): void {
    this.productsService.getAllProducts(0, 10).subscribe(data => {
      this.products = data;
      this.offset += this.limit;
      this.total = this.products
        .map(item => item.price)
        .reduce((price, total) => price += total, 0)
    });

  }
}
