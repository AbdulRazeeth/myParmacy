import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dialogue-box',
  templateUrl: './dialogue-box.component.html',
  styleUrls: ['./dialogue-box.component.css']
})
export class DialogueBoxComponent implements OnInit {
  @ViewChild('valueX') valuex!:ElementRef
  @ViewChild('valueY') valuey!:ElementRef
  @ViewChild('renderErrorValue') renderElement!:ElementRef
  constructor(public dialogueUpdate:DataService) { 
  }

  ngOnInit(): void {
  }
  closeDialogueBox(){
    this.dialogueUpdate.openDialogue = !this.dialogueUpdate.openDialogue
  }
  takeValue(){
    this.dialogueUpdate.inputX = this.valuex
    this.dialogueUpdate.inputY = this.valuey
    this.dialogueUpdate.inputX.nativeElement.value
    this.dialogueUpdate.inputY.nativeElement.value
    if(this.dialogueUpdate.inputX.nativeElement.value === '' || this.dialogueUpdate.inputY.nativeElement.value  ===''){
      this.notifyError()
      return
    }
    else{
      this.dialogueUpdate.clickValue.push({'x':this.valuex.nativeElement.value+'px','y':this.valuey.nativeElement.value+'px'})
      this.dialogueUpdate.openDialogue = !this.dialogueUpdate.openDialogue
    }
  }
  notifyError(){
    this.dialogueUpdate.paraElement = this.renderElement
    this.dialogueUpdate.paraElement.nativeElement.innerHTML = 'Enter the Correct Values of X and Y to plot DIV'
  }

}
