import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{
  searchResult:boolean=false
  editorResult:boolean=false
  bgColor!:number;
  renderValue!:any;
  iteration!:number;
  colorsArr:string[]=['#a06aff','#fff','#fad154','#cfc4fe','#eebeff','#62d1fb','#85ebd9','#c2f9ee','#dcf18f','#d9e8f0','#ffed7d','#fed931','#f29c35','#f09857','#b3d9e6','#bac28a','#bac28a','#e8ba2e','#9cc2d6','#9cc2d6','#9cc2d6','#9cc2d6']
  bookMasterArr:any=[
    {
      bookName:'Custom',
      image:`img-1.jpeg`,
      color:'#cfc4fe',
      pages:[{title:'Title',content:'Hi this is the note pages of the each notes'}]
    }
  ]
  imgNo!:number;
  constructor() {
    console.log(this.colorsArr.length)
   }
   ngOnInit(): void {
   }
  updateBookMasterArr(){
    this.bgColor = Math.trunc(Math.random()*17)
    this.imgNo =Math.trunc(Math.random()*9)+1
    console.log(this.imgNo)
    this.bookMasterArr.push({bookName:'Untitled',image:`img-${this.imgNo}.jpeg`,color:`${this.colorsArr[this.bgColor]}`,pages:[]})
  }
  updatePages(){

  }
  }
