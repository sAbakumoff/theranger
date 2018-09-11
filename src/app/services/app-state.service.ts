import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { data } from "../resources/structure";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private range  = {
  }
  public CurrentRange: BehaviorSubject<object> = new BehaviorSubject(this.range);

  constructor() { }

  public get structure() : any{
    return data;
  }

  public setSubRangeStart(val : {r:string, i :number}){
    this.range = Object.assign({}, this.range, {
      [val.r] : val.i
    });
    this.CurrentRange.next(this.range);
  }
}
