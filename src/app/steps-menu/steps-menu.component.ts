import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'steps-menu',
  templateUrl: './steps-menu.component.html',
  styleUrls: ['./steps-menu.component.css'],
})

export class StepsMenuComponent implements OnInit {
  
  @Input()  steps : any[] = new Array();
  
  constructor(){}
  
  ngOnInit(){
  }
}