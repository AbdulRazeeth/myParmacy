import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  constructor(public serviceData:DataService , private routerLink:ActivatedRoute) {
    console.log(routerLink)
    console.log('ghjk')
   }

  ngOnInit(): void {
    console.log(this.routerLink)
  }
  closeOnOuterClick(){
    this.serviceData.openDialogue = !this.serviceData.openDialogue
  }
}
