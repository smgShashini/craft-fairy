import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CraftService } from '../craft.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  //Store  selected specialization id
  events: string[] = [];
  myControl = new FormControl();
  craftArray: string[] = []; // Store all the craft items
  craftItems: any[] = []; // Store item objects from web api
  filteredOptions: Observable<string[]> | undefined;
  selectedItem: string = '';

  constructor(private craftServise: CraftService) {}

  ngOnInit() {
    // Get item list from web api
    this.craftServise.getItemList().subscribe((data) => {
      this.craftItems = data;
      console.log(this.craftItems);

      //create craft list array
      for (var i = 0; i < this.craftItems.length; i++) {
        this.craftArray[i] = this.craftItems[i].itemName;
      }
      console.log(this.craftArray);
    });
    // Autocorrection
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  //Filter for the autocorrection
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.craftArray.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  //Search button click events
  clickme() {
    console.log('it does nothing', this.selectedItem);
  }
}
