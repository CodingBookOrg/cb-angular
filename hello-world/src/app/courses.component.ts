
import { Component } from '@angular/core';
@Component({
    selector: "courses",
    template: `<input [(ngModel)]="title" type="text">
        <div>{{ title | titleCase }}`
})
export class CoursesComponent {
    title: string;
}