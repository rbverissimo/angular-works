
export class LoggingService {
  
  constructor() { }

  logStatusChange(status: string){
    console.log('A new status changed, new status: ' + status);
  }

}
