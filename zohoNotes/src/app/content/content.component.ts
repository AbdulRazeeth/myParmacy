import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
emId!:any;
CreateBookArr:any[]=[]
  constructor(public data:DataService) {
    this.CreateBookArr = this.data.bookMasterArr
  }

  ngOnInit(): void {
  }
  appendRequest(value:any){
    this.data.updateBookMasterArr()
  }

}
