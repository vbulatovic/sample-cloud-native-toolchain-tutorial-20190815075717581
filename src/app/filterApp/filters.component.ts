import { Component, OnInit } from '@angular/core';
import { TutorialsService } from '../additional/services/tutorials.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit {

  public search: string;
  private talk : {};
  public tutorials : [];
  show: boolean;
  checkedBox : boolean=true;
  
  
  constructor( private _tutorialsService: TutorialsService) { }

  ngOnInit() {
    return this._tutorialsService.getTutorials()
      .subscribe(data => {this.talk = data; this.tutorials = this.talk[0].tutorials;});
  }

  togle(){
    this.show = !this.show;
  }
}
