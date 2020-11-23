import {Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSuccess: boolean = false;
}

class Course {
  constructor(public id: number, public name : string) {
  }

  setName = (name : string) => {
    this.name += name;
  }
}
