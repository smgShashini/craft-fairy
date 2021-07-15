import { Component, OnInit } from '@angular/core';
import { CraftService } from '../craft.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  recievedProductList: any[] = []; // Store recieved product objects
  displayList: any[] = []; // Store display list of products in each category
  recievedTab: number | undefined; // Store recieved tab index
  subscription: any;
  msg: string = '';

  constructor(private craftService: CraftService) {}

  ngOnInit() {
    // Get recieved tab index from category component
    this.subscription = this.craftService.currentTab.subscribe(
      (index) => (this.recievedTab = index)
    );
    if (this.recievedTab == 0) {
      // Get product list from web api
      this.craftService.getProductFromWebApi().subscribe((data) => {
        this.recievedProductList = data;
        // Create display list
        for (var i = 0; i < this.recievedProductList.length; i++) {
          if (this.recievedProductList[i].rate == 1) {
            this.displayList.push(this.recievedProductList[i]);
          }
        }
      });
    } else {
      // Get product list from web api
      this.craftService.getProductFromWebApi().subscribe((data) => {
        this.recievedProductList = data;
        // Create display list
        for (var i = 0; i < this.recievedProductList.length; i++) {
          if (this.recievedProductList[i].categoryId == this.recievedTab) {
            this.displayList.push(this.recievedProductList[i]);
          }
        }
      });
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Create new list with recieved tab
  createDisplayList() {
    for (var i = 0; i < this.recievedProductList.length; i++) {
      if (this.recievedProductList[i].categoryId == this.recievedTab) {
        this.displayList.push(this.recievedProductList[i]);
      }
    }
  }
}
