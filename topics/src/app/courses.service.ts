import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class CoursesService {
    getCourses = () : string[] => {
        return ["Java", "Python", "Cloud Computing"];
    }
}