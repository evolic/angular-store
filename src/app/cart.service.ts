import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class CartService {
  items = [];
  itemsSubject = new BehaviorSubject<any[]>([]);
  itemsObservable = this.itemsSubject.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  addToCart(product): void {
    var postion = this.items.indexOf(product);
    product["qty"] = 1;

    if (postion == -1) {
      this.items.push(product);
    } else {
      ++this.items[postion]["qty"];
    }
    this.itemsSubject.next(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.itemsSubject.next(this.items);
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}