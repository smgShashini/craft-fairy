import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  //displayCategory = true; // Display and hide category
  option: string = '';
  events: string[] = [];
  tab = 0; // Store the index of selected tab
  constructor() {}

  ngOnInit(): void {}
  selectChangeHandler(tabChangeEvent: MatTabChangeEvent) {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);
    this.tab = tabChangeEvent.index;
    console.log(this.tab);

    // tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    //   console.log('tabChangeEvent => ', tabChangeEvent);
    //   console.log('index => ', tabChangeEvent.index);
    // }
  }
}
