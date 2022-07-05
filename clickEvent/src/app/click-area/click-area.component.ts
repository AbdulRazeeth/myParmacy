import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { __values } from 'tslib';
import { DataService } from '../data.service';

@Component({
  selector: 'app-click-area',
  templateUrl: './click-area.component.html',
  styleUrls: ['./click-area.component.css'],
})
export class ClickAreaComponent implements OnInit {
  parentValue:any=[]
  compareValue:any
  constructor(public clickData:DataService) { 
  }
  ngOnInit(): void { 
    this.parentValue = this.clickData.clickValue; 
  }
  clickedArea(event:any){
    this.clickData.takeClickValue(event)
  }
  highLight(valueX:any,event:any){
    event.stopPropagation()
    console.log(valueX)
    this.clickData.clickedAreaHighLightX = valueX
  }
  remove(){
    this.clickData.clickedAreaHighLightX = false
  }
  deleteButton(indexValue:any){
    this.clickData.deleteValueArray(indexValue)
  }
}
