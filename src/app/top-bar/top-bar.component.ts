import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  items;
  itemsSubscription: Subscription;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.itemsSubscription = this.cartService.itemsObservable.subscribe((data) => {
      this.items = data;
    });
  }

    ngOnDestroy() {
    if(this.itemsSubscription) {
      this.itemsSubscription.unsubscribe();
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/