import {Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses : Course[] = [
    new Course(1, 'Java'),
    new Course(2, 'Python'),
    new Course(2, 'NG'),
  ];

  onAdd = () => {
    this.courses.push(new Course(4, 'Spring'));
  }

  onDelete = (course: Course) => {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onUpdate = (course : Course) => {
    course.setName("(Updated)")
  }
}

class Course {
  constructor(public id: number, public name : string) {
  }

  setName = (name : string) => {
    this.name += name;
  }
}
