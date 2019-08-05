import { Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {

  public show:boolean = false;
  
  constructor() { }

  ngOnInit() {
    console.log();
  }

  togle(){
    this.show = !this.show;
  }
  
}
