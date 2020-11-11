
import { Component } from '@angular/core';
@Component({
    selector: "courses",
    template: `<h2>{{ title}}</h2>
        <button class="btn btn-primary" [class.active]="isActive">Bootstrap</button>`
})
export class CoursesComponent {
    title: string = "List of courses";
    isActive = false;
}

