import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockipt',
  templateUrl: './cockipt.component.html',
  styleUrls: ['./cockipt.component.css']
})
export class CockiptComponent implements OnInit {

  serverElements = [];
  newServerName = '';
  newServerContent = ''; 

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
  /*    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    }); */
  }

  onAddBlueprint() {
/*     this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    }); */
  }  

}
