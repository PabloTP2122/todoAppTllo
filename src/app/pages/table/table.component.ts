import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

import { Product } from '../../models/product.model';
import { DataSourceproduct } from './data-source';

import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {


  //Instanciado de columnas
  columns: string[] = ['id', 'Producto', 'Precio', 'Imagen', 'Actions'];
  total = 0;
  input = new FormControl('', { nonNullable: true })


  constructor(
    private productsService: ProductsService
  ) {
  }
  //products: Product[] = [];
  dataSource = new DataSourceproduct;
  offset = 0;
  limit = 10;

  ngOnInit(): void {
    this.productsService.getAllProducts(this.offset, this.limit)
      .subscribe(data => {
        this.dataSource.init(data);
        this.offset += this.limit;
        this.total = this.dataSource.getTotal();
      })

    this.input.valueChanges
      .pipe(
        debounceTime(300)//300ms
      )
      .subscribe(value => {
        this.dataSource.find(value);
        /* console.log(value); */
      })
  }
  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }
}
