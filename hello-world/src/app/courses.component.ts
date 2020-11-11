import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: "courses",
    template: `<h2>{{ title}}</h2>
                <img [src]="organizationImageUrl">`
})
export class CoursesComponent {
    title: string = "List of courses"
    organizationImageUrl: string = 
        "https://codingbook.org/wp-content/uploads/2020/08/cropped-logo2-2-1.png"
}

