import { Component, OnInit } from '@angular/core';
import { ApiMenuService } from '../../shared/service/api-menu.service';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ApiMenuService]
})
export class MenuComponent implements OnInit{

  public data : any = [];
  constructor(private _apiMenu: ApiMenuService){}

  ngOnInit(){
    this._apiMenu.getData().subscribe((data) => {
      this.data = data;
    });
  }
}
