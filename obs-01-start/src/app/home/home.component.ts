import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription, interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';

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
      const limit = 10;
      setInterval(() => {
        observer.next(count);

        if(count === 12){
          observer.complete();
        }

        if(count > limit){
          observer.error(new Error(`Counter is greater than ${limit}!`));
        }
        count++;
      }, 1000)
    });

    // Subscribing to the  observable
    this.secondObsSubscription = customIntervalObservable
    .pipe(
      filter((data: number) => {
        return data % 2 === 0;
      }),
      map((data: number) => 
      {
        return 'Round: ' + (data + 1);  
      }))
      .subscribe(data => 
        {
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
