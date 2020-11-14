import { Component } from '@angular/core';
import { IFavoriteChangedEventArgs } from "./favorite/Out/IFavoriteChangedEventArgs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLiked = false;
  
  onFavoriteChanged= (eventArgs: IFavoriteChangedEventArgs) => {
    console.log("Favorite Changed ", eventArgs);
  }
}
