import { Component, OnInit } from '@angular/core';
import { IFavoriteChangedEventArgs } from "./favorite/Out/IFavoriteChangedEventArgs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.courses.length);
  }
  courses: string [] = ["Java", "Python"]
}
