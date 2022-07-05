import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-note-pages',
  templateUrl: './note-pages.component.html',
  styleUrls: ['./note-pages.component.css']
})
export class NotePagesComponent implements OnInit {
   array!:any;
  constructor(public data:DataService) { 
  }

  ngOnInit(): void {
    
  }

}
