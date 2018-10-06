import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiMenuService {

  public apiUrl = "http://cdn.tekus.co/PT2018/Products.json";

  constructor(private _http: HttpClient){}

  getData(){
    return this._http.get(this.apiUrl);
  }
}
