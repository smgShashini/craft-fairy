import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CraftService {
  constructor(private http: HttpClient) {}

  // Service method to get all item list from the web api
  getItemList(): Observable<string[]> {
    return this.http.get<string[]>('https://localhost:5001/api/Item');
  }
}
