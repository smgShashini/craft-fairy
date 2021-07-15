import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CraftService } from '../craft.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  subscription: any;
  active: boolean = true;
  paperActive: boolean = false;
  woodenActive: boolean = false;
  glassActive: boolean = false;
  ironActive: boolean = false;
  clothActive: boolean = false;

  //displayCategory = true; // Display and hide category
  option: string = '';
  events: string[] = [];
  tab = 0; // Store the index of selected tab
  recicurrentTab: number | undefined;

  constructor(private craftService: CraftService) {}

  ngOnInit(): void {
    this.subscription = this.craftService.currentTab.subscribe(
      (index) => (this.recicurrentTab = index)
    );
    console.log(this.recicurrentTab);

    // Sending tab index
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  selectChangeHandler(tabChangeEvent: MatTabChangeEvent) {
    switch (tabChangeEvent.index) {
      case 0: {
        this.craftService.changeTabIndex(0);

        break;
      }

      case 1: {
        this.craftService.changeTabIndex(1);
        this.paperActive = true;
        break;
      }

      case 2: {
        this.craftService.changeTabIndex(2);
        this.woodenActive = true;
        break;
      }

      case 3: {
        this.craftService.changeTabIndex(3);
        this.glassActive = true;
        break;
      }
      case 4: {
        this.craftService.changeTabIndex(4);
        this.clothActive = true;
        break;
      }

      case 5: {
        this.craftService.changeTabIndex(5);
        this.ironActive = true;
        break;
      }
    }

    // console.log('tabChangeEvent => ', tabChangeEvent);
    // console.log('index => ', tabChangeEvent.index);
    // this.tab = tabChangeEvent.index;
    // console.log(typeof this.tab);

    // //change index
    // console.log('Sending index ' + this.tab);

    // tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    //   console.log('tabChangeEvent => ', tabChangeEvent);
    //   console.log('index => ', tabChangeEvent.index);
    // }
  }
}
