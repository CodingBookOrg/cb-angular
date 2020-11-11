import { Component } from '@angular/core';

@Component({
    selector: "courses",
    template: `<h2>{{ title + " (Count:" + getCount() + ")"}}</h2>
                <app-course></app-course>`
})
export class CoursesComponent {
    title: string = "List of courses"

    getCount  = () : number => {
        return 5;
    }
}

