import { Component } from '@angular/core';

import { environment } from "@env/environment"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(){
    console.log('env', environment);
  }
}
