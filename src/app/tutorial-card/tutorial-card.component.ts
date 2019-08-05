import { Component, OnInit, Input } from '@angular/core';

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
  
  }

  toggle(){
    this.show = !this.show;
  }
}
