import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.sass']
})
export class TutorialComponent implements OnInit {

  @Input() public search: string;

  @Input() public allTutorials: any;
  
  constructor( ) { }

  ngOnInit() {
    
  }
}
