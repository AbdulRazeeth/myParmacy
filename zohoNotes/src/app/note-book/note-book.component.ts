import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-note-book',
  templateUrl: './note-book.component.html',
  styleUrls: ['./note-book.component.css']
})
export class NoteBookComponent implements OnInit {
  @Input('parentData') public no!:any
  @Input('indexData') public indexValue!:any
  @ViewChild('imgSection') imgElement!:ElementRef
  imagePath!:any
  createBook!:any
  constructor(public data:DataService) {
    
   }

  ngOnInit(): void {
    this.imagePath = `assets/${this.no.image}`
    console.log(this.no)
  }
  openNote(){
    this.data.renderValue = this.no
    this.data.iteration = this.indexValue
  }

}
