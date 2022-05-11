import { Component, OnInit } from '@angular/core';
import {Product} from "../../_models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [
    new Product(1, 'Product 1', 'abc-123', 50, new Date('2022-02-18'), 'https://placeimg.com/640/480/arch', 3),
    new Product(2, 'Product 2', 'def-456', 10, new Date('2022-03-10'), 'https://placeimg.com/640/480/arch', 4),
    new Product(3, 'Product 3', 'hij-789', 25, new Date('2021-10-13'), 'https://placeimg.com/640/480/arch', 2),
    new Product(4, 'Product 4', 'klm-876', 100, new Date('2022-05-11'), 'https://placeimg.com/640/480/arch', 5),
  ];

  addProduct: Product = new Product(0, '', '', 0, new Date(), '', 0);
  editProduct: any = new Product(0, '', '', 0, new Date(), '', 0);

  displayedColumns: string[] = ['image', 'name', 'code', 'date', 'price', 'rating', 'actions'];

  imageToggle: boolean = false;
  addToggle: boolean = false;
  editToggle: boolean = false;
  search: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleImages() {
    this.imageToggle = !this.imageToggle;
  }

  toggleAdd() {
    this.addToggle = !this.addToggle;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }

  add() {
    this.products.push(this.addProduct);
    this.addToggle = false;
    this.addProduct = new Product(0, '', '', 0, new Date(), '', 0);
  }

  edit() {
    const index = this.products.findIndex(product => product.id === this.editProduct.id);
    this.products[index] = this.editProduct;
    this.editProduct = new Product(0, '', '', 0, new Date(), '', 0);
    this.editToggle = false;
  }

  startEdit(id: number) {
    this.editToggle = true;
    this.editProduct = this.products.find(product => product.id === id);
  }
}
