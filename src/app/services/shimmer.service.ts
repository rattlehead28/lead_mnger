import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShimmerService {
  showShimmer: BehaviorSubject<boolean> = new BehaviorSubject(true);
  constructor() { }

  showShimmerEffect(isShow: boolean){
    this.showShimmer.next(isShow);
  }
}
