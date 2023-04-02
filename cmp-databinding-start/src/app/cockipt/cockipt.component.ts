import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockipt',
  templateUrl: './cockipt.component.html',
  styleUrls: ['./cockipt.component.css']
})
export class CockiptComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{
    serverName: string, serverContent: string}>();

  @Output() blueprintCreated = new EventEmitter<{
    serverName: string, serverContent: string}>();
  serverElements = [];
  newServerName = '';
  newServerContent = ''; 

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(
      {serverName: this.newServerName,
      serverContent: this.newServerContent})
  }  

}
