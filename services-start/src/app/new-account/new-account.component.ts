import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, 
    private accountsService: AccountsService){
      this.accountsService.statusUpdated.subscribe(
        (status: string) => alert('New status: ' + status))
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAcount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
  
}
