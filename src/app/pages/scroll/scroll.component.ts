import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html'
})
export class ScrollComponent {

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
    });

  }

}
