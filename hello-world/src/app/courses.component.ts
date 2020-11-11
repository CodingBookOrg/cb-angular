
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: "courses",
    template: `<h2>{{ title}}</h2>
                <table>
                    <tr>
                        <td [attr.colspan]="colSpan" 
                        *ngFor="let course of courses">{{ course }}</td>
                    </tr>
                </table>`
})
export class CoursesComponent {
    title: string = "List of courses"
    courses : string[];
    colSpan = 5

    constructor(service: CoursesService) {
        this.courses = service.getCourses()
    }
}

