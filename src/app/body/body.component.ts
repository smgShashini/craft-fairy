import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CraftService } from '../craft.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnDestroy, OnInit {
  recievedProductList: any[] = []; // Store recieved product objects
  displayList: any[] = []; // Store display list of products in each category
  recievedTab: number | undefined; // Store recieved tab index
  subscription: any;
  msg: string = '';
  itemId: number | undefined;

  constructor(private craftService: CraftService, private router: Router) {
    this.subscription = this.craftService.currentSelectedItemId.subscribe(
      (item) => {
        this.itemId = item;
        if (this.itemId > 0) {
          this.craftService
            .getProductByItemIdFromWebApi(this.itemId)
            .subscribe((data) => {
              this.displayList = data;
            });
        }
        //console.log('Onint in search body');
        // Get product list by item id and store in product list array
      }
    );
  }
  ngOnInit() {
    this.subscription = this.craftService.currentTab.subscribe((index) => {
      this.recievedTab = index;
      if (this.recievedTab == 0) {
        // Get product list from web api
        this.craftService.getBestSellingProducts().subscribe((data) => {
          this.displayList = data;
          // Create display list
          // for (var i = 0; i < this.recievedProductList.length; i++) {
          //   if (this.recievedProductList[i].rate == 1) {
          //     this.displayList.push(this.recievedProductList[i]);
          //   }
          // }
        });
      } else {
        // Get product list from web api
        this.craftService
          .getProductByCatIdFromWebApi(this.recievedTab)
          .subscribe((data) => {
            this.displayList = data;
          });
        // Create display list
        //   for (var i = 0; i < this.recievedProductList.length; i++) {
        //     if (this.recievedProductList[i].categoryId == this.recievedTab) {
        //       this.displayList.push(this.recievedProductList[i]);
        //     }
        //   }
        // });
      }
    });
  }

  // this.subscription = this.craftService.currentSelectedItemId.subscribe(
  //   (item) => (this.itemId = item)
  // );

  // Get recieved tab index from category component

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Create new list with recieved tab
  // createDisplayList() {
  //   for (var i = 0; i < this.recievedProductList.length; i++) {
  //     if (this.recievedProductList[i].categoryId == this.recievedTab) {
  //       this.displayList.push(this.recievedProductList[i]);
  //     }
  //   }
  // }
}
