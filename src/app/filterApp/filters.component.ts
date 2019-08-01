import { Component, OnInit } from '@angular/core';
import { TutorialsService } from '../additional/services/tutorials.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit {

  private talk : {};
  tutorials : [];
  constructor( private _tutorialsService: TutorialsService) { }

  ngOnInit() {
    return this._tutorialsService.getTutorials()
      .subscribe(data => {this.talk = data; this.tutorials = this.talk[0].tutorials; console.log(this.tutorials)});
  }
   
}
