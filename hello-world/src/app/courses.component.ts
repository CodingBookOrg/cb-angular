
import { Component } from '@angular/core';
@Component({
    selector: "courses",
    template: `<br>
        {{ title | summary:30 }}`
})
export class CoursesComponent {
    title = `Java course teaches java development 
    by helping people to learn software development 
    Throgh hands on projects`
}