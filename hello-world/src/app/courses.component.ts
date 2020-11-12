
import { Component } from '@angular/core';
@Component({
    selector: "courses",
    template: `<br>
    {{ course.title | uppercase | lowercase }}<br>
    {{ course.rating | number:'1.2-2' }}<br>
    {{ course.students | number }}<br>
    {{ course.price | currency }}<br>
    {{ course.releaseDate | date:'shortDate'}}
        `
})
export class CoursesComponent {
    course = {
        title: "Java",
        rating: 4.9785,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2019, 3, 5)
    }
}

