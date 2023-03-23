import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
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
  name = '';
  title: any;
}
