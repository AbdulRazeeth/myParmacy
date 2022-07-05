import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @ViewChild('input') titleBar!:ElementRef
  constructor(public data:DataService) {
   }

  ngOnInit(): void {
  }
  removeEditor(){
    this.data.editorResult =false
  }
  removeClass(){
    this.titleBar.nativeElement.classList.remove('placeholder')
    this.verify()
  }
  verify(){
    if(this.titleBar.nativeElement.innerHTML === ''){
      this.titleBar.nativeElement.classList.add('placeholder')
    }else{
      return
    }
  }

}
