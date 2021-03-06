import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'steps-menu',
  templateUrl: './steps-menu.component.html',
  styleUrls: ['./steps-menu.component.css'],
})

export class StepsMenuComponent implements OnInit {
  
  @Input()  steps : any[] = new Array();
  @Output() selectedItemStep: EventEmitter<any>  = new EventEmitter();
  @Output() newBackMenu: EventEmitter<any> = new EventEmitter();
 
  public currentStep : any = {};
  
  constructor(){
    
  }

  ngOnInit(){
  }

  onSelectedStep(step : any){
    this.currentStep = step;
  }

  onItemStepSelected(itemStep : any){
    this.selectedItemStep.emit(itemStep);
  }

  onBackMenu(){
    this.newBackMenu.emit();
  }

  
}