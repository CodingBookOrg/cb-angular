import {Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    { id:1, name:'Java'},
    { id:2, name:'Python'},
    { id:3, name:'NG'}
  ];
}
