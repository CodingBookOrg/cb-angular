import { Component } from '@angular/core';

@Component({
    selector: "courses",
    template: `<h2>{{ title + " (Count:" + getCount() + ")"}}</h2>
                <ul>
                    <li *ngFor="let course of courses">{{ course }}</li>
                </ul>`
})
export class CoursesComponent {
    title: string = "List of courses"
    courses : string[] = ["Java", "Python", "Clooud Computing"];

    getCount  = () : number => {
        return 5;
    }
}

