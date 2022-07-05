import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-click-result',
  templateUrl: './click-result.component.html',
  styleUrls: ['./click-result.component.css']
})
export class ClickResultComponent implements OnInit {
  parentValue:any=[]
  constructor(public requiredData:DataService) {}

  ngOnInit(): void {
    this.parentValue = this.requiredData.clickValue;
  }
  deleteElement(value:any){
   this.requiredData.deleteValueArray(value)
  }
  highLightViaResult(value:any){
    this.requiredData.clickedAreaHighLightX = value
  }
  openDialogueBox(){
   this.requiredData.openDialogue = !this.requiredData.openDialogue
   this.requiredData.paraElement.nativeElement.innerHTML= ''
  //  this.requiredData.inputX.value =0
  //  this.requiredData.inputY.value =0
   console.log('ddfg')
  }
}
