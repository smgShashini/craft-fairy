import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CraftService {
  // For tab index
  private tabSource = new BehaviorSubject(0);
  currentTab = this.tabSource.asObservable();

  constructor(private http: HttpClient) {}

  // Change tab index
  changeTabIndex(index: number) {
    this.tabSource.next(index);
  }

  // Service method to get all item list from the web api
  getItemList(): Observable<string[]> {
    return this.http.get<string[]>('https://localhost:5001/api/Item');
  }

  // Method to get all products details from the web api
  getProductFromWebApi(): Observable<string[]> {
    return this.http.get<string[]>('https://localhost:5001/api/Product');
  }
}
