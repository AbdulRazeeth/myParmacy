import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-each-note',
  templateUrl: './each-note.component.html',
  styleUrls: ['./each-note.component.css']
})
export class EachNoteComponent implements OnInit {

  constructor(public data:DataService) {
   }

  ngOnInit(): void {
  }

}
