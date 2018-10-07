import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiMenuService } from '../../shared/service/api-menu.service';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ApiMenuService]
})
export class MenuComponent implements OnInit{

  @Output() onSelectedEvent : EventEmitter<any> = new EventEmitter();

  public data : any = [];
  constructor(private _apiMenu: ApiMenuService){}

  ngOnInit(){
    this._apiMenu.getData().subscribe((data) => {
      this.data = data;
    });
  }

  onSelected(event, product) {
    if (product != null && this.onSelectedEvent != null){
      this.onSelectedEvent.emit(product);
    }
  }
}
