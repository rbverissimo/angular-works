import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

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
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit(
      {serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value})
  }  

}
