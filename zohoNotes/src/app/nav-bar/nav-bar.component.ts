import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  dynamic1:boolean=true;
  dynamic2:boolean=false;
  dynamic3:boolean=false;
  dynamic4:boolean=false;
  @ViewChild('notebook') noteBook!:ElementRef
  @ViewChild('allnotes') allNotes!:ElementRef
  @ViewChild('favorite') favorite!:ElementRef
  @ViewChild('shared') shared!:ElementRef
  constructor(public data:DataService, public activatedRoute: Router) { }

  ngOnInit(): void {
  }
  highLight1(){
    this.dynamic1 = true
    this.dynamic2 = false
    this.dynamic3 = false
    this.dynamic4 = false
  }
  highLight2(){
    this.dynamic2 = true
    this.dynamic1 = false
    this.dynamic3 = false
    this.dynamic4 = false
  }
  highLight3(){
    this.dynamic3 = true
    this.dynamic1 = false
    this.dynamic2 = false
    this.dynamic4 = false
  }
  highLight4(){
    this.dynamic4 = true
    this.dynamic1 = false
    this.dynamic2 = false
    this.dynamic3 = false
  }
  takeSearchBar(){
    this.data.searchResult = true
  }
  takePageEditor(){
    console.log(this.activatedRoute.url.slice(1))
    this.data.editorResult = true
    this.data.bgColor =Math.trunc(Math.random()*22)
  }
}
