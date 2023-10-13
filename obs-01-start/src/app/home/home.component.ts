import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  // private firstObsSubscription: Subscription;
  private secondObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
/*     this.firstObsSubscription = interval(1000).subscribe(
      count => {
        console.log(count)
      }
    );
 */
    // Building an observable from scratch, defining its logic
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        if(count === 2){
          observer.complete();
        }

        if(count > 3){
          observer.error(new Error('Counter is greater than 3!'));
        }
        count++;
      }, 1000)
    });

    // Subscribing to the  observable
    this.secondObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, err => {
      // alert(err.message);
    });
  }

  ngOnDestroy(): void {
    // this.firstObsSubscription.unsubscribe();
    this.secondObsSubscription.unsubscribe();
  }

}
