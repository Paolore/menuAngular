import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'selected-menu',
  templateUrl: './selected-menu.component.html',
  styleUrls: ['./selected-menu.component.css']
})
export class SelectedMenuComponent implements OnInit {
  @Input() products : any[] = new Array();
  @Output() onCancelEvent : EventEmitter<any> = new EventEmitter();
  @Output() onSubmitOrderEvent : EventEmitter<any> = new EventEmitter();
  
  constructor() { }
    
  ngOnInit() {
  }

  getTotalValue(){
    var totalValue : number = 0;

    for (let index = 0; index < this.products.length; index++) {
      totalValue += this.products[index].price;
    }

    return totalValue;
  }

  cancelOrder(){
    this.onCancelEvent.emit();
  }

  submitOrder(){
    var totalValue : number = this.getTotalValue();
      this.onSubmitOrderEvent.emit(totalValue);
  }


}
