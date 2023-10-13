import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  private activatedSub: Subscription;
  isUserActivated: boolean;


  constructor(private userService: UserService) {}


  ngOnInit() {
    this.activatedSub = this.userService.activatedSubject.subscribe( (didUserActivated: boolean) => {
      this.isUserActivated = didUserActivated;
    })
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
