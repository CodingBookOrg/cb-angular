import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = {
    title: "Task 1",
    assignee: {
      name: "John"
    }
  }
}

class Course {
  constructor(public id: number, public name : string) {
  }

  setName = (name : string) => {
    this.name += name;
  }
}
