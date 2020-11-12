
import { Component } from '@angular/core';
@Component({
    selector: "courses",
    /** https://www.w3schools.com/Jsref/dom_obj_style.asp */
    template: `<h2>{{ title}}</h2>
        <input type="text" (keyup.enter)="onKeyup($event)">`
})
export class CoursesComponent {
    title: string = "List of courses";
    isActive = true;

    onKeyup($event) {
        console.log("Enter pressed");
    }
}

