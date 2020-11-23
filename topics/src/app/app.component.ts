import {Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses : Course[] = []
  load = () => {
    this.courses = [
      new Course(1, 'Java'),
      new Course(2, 'Python'),
      new Course(2, 'NG'),
    ];
  }

  trackCourse = (index : number, course : Course) : number => {
    return course ? course.id : undefined;
  }
}

class Course {
  constructor(public id: number, public name : string) {
  }

  setName = (name : string) => {
    this.name += name;
  }
}
