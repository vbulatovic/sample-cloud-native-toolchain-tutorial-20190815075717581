import { Component, OnInit, Input } from '@angular/core';

import{ TutorialComponent } from '../tutorial/tutorial.component'

@Component({
  selector: 'app-tutorial-card',
  templateUrl: './tutorial-card.component.html',
  styleUrls: ['./tutorial-card.component.sass']
})
export class TutorialCardComponent implements OnInit {

  public show:boolean = false;

  @Input() public tutorial: any;

  constructor() { }

  ngOnInit() {
    console.log(this.tutorial);
  }

  toggle(){
    this.show = !this.show;
  }
}
