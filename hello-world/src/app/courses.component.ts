
import { Component } from '@angular/core';
@Component({
    selector: "courses",
    template: `<h2>{{ title}}</h2>
        <input [(ngModel)]="email" (keyup.enter)="onKeyup()"/>
        `
})
export class CoursesComponent {
    title: string = "List of courses";
    email = "info@codingbook.org";

    onKeyup() {
        console.log(this.email);
    }
}

