import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: "courses",
    template: `<h2>{{ title}}</h2>
                <ul>
                    <li *ngFor="let course of courses">{{ course }}</li>
                </ul>`
})
export class CoursesComponent {
    title: string = "List of courses"
    courses : string[];

    constructor(coursesService : CoursesService) {
        this.courses = coursesService.getCourses();
    }
}

