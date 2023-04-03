import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockipt',
  templateUrl: './cockipt.component.html',
  styleUrls: ['./cockipt.component.css']
})
export class CockiptComponent implements OnInit {

  @Output('srvCreated') serverCreated = new EventEmitter<{
    serverName: string, serverContent: string}>();

  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string, serverContent: string}>();

  // newServerName = '';
  newServerContent = ''; 

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.newServerContent});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit(
      {serverName: nameInput.value,
      serverContent: this.newServerContent})
  }  

}
