import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
  
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
      });
    }
  
    onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
      this.serverElements.push({
        type: 'blueprint',
        name: blueprintData.serverName,
        content: blueprintData.serverContent
      });
    } 

    onChangeFirst(){
      this.serverElements[0].name = 'Changed';
      this.serverElements[1].name = 'Changed';
      this.serverElements[2].name = 'Changed';
      this.serverElements[3].name = 'Changed';
    }
}
