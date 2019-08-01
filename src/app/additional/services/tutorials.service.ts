import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Datas } from '../model/tutorials.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {
  
  private url = 'https://api.myjson.com/bins/85mjt';

  constructor(private http: HttpClient) { }
	
  getTutorials():Observable<Datas[]>{
    return this.http.get<Datas[]>(this.url)
        .pipe(
            map((res: any) => res.map(
              (tutorial: Datas) => new Datas().deserialize(tutorial))),
        );
  }
}
