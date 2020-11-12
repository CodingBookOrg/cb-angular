
import { Component } from '@angular/core';
@Component({
    selector: "courses",
    /** https://www.w3schools.com/Jsref/dom_obj_style.asp */
    template: `<h2>{{ title}}</h2>
        <button class="btn btn-primary" (click)="onClick()">
        Bootstrap
        </button>`
})
export class CoursesComponent {
    title: string = "List of courses";
    isActive = true;

    onClick() {
        console.log("Button Clicked");
    }
}

