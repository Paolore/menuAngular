import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMenu: boolean = true;
  listProducts: any[] = new Array();

  onSelectedProduct(product){
    this.showMenu = false;
    
    this.listProducts.push(product);
    console.log(this.listProducts);
  }

  onCancelOrder(){
    this.listProducts = new Array();
  }

  onSubmitOrder(totalValue: number){
    this.onCancelOrder();
    alert(totalValue);

  }
}
