import { Component, OnInit } from '@angular/core';

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
    
    this.listProducts.push(product);
    this.listSteps = product.steps;
    console.log(this.listSteps);
    
    
  }

  ngOnInit() {
  }
  
  onCancelOrder(){
    this.listProducts = new Array();
  }

  onSubmitOrder(totalValue: number){
    this.onCancelOrder();
    alert(totalValue);

  }

  onSelectedSteps(){
    
  }
}
