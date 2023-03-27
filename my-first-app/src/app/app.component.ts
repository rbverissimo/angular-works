import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      h1 {
        color: dodgerblue;
      }
      p {
        color: blue;
      }
    `,
  ],
})
export class AppComponent {
  showSecret = false;
  log = [];
  name = '';
  title: any;

  onTogglePassword() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
