import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showMenu: boolean = true;
  listProducts: any[] = new Array();
  listSteps: any[] = new Array();

  onSelectedProduct(product){
    this.showMenu = false;

    product.additionsMenu = new Array();
    
    this.listProducts.push(product);
    this.listSteps = product.steps;
  }

  ngOnInit() {
  }
  
  onCancelOrder(){
    this.listProducts = new Array();
    this.showMenu = true;
  }

  onSubmitOrder(totalValue: number){
    this.onCancelOrder();
    alert(totalValue);
  }

  addItemToOrder(itemStep){
    this.listProducts[this.listProducts.length - 1].additionsMenu.push(itemStep);
  }
}
