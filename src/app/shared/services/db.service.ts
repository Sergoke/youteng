import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(
    private http: HttpClient
  ) { }

  getVideoIds(){
    return this.http.get('http://localhost:2500/data/videoids');
  }
}