import {  Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  clickValue:any =[]
  clickedAreaHighLightX!:any
  clickedAreaHighLightY!:any
  openDialogue:boolean = false;
  paraElement!:any
  inputX!:any
  inputY!:any
  constructor() { 
  }
  takeClickValue(value:any){
    this.clickValue.push({'x':value.pageX+'px',"y":value.pageY+'px'})
  }
  deleteValueArray(index:any){
    console.log(index)
    this.clickValue.splice(index,1)
  }
}
