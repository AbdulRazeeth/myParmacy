import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit(): void {
  }
  removeSearchBar(){
    this.data.searchResult=false
  }

}
