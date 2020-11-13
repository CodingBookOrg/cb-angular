import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

import { FavoriteChangedEventArgs } from './Out/FavoriteChangedEventArgs';
import { IFavoriteChangedEventArgs } from './Out/IFavoriteChangedEventArgs';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  
  @Input("is-favorite") isFavorite: boolean;
  @Output("change") click = new EventEmitter();

  faStar = faStar;
  faStarEmpty = faStarEmpty;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleFavorite = () => {
    this.isFavorite = ! this.isFavorite;
    let args: IFavoriteChangedEventArgs = new FavoriteChangedEventArgs(); 
    args.newValue = this.isFavorite;
    this.click.emit(args);
  }
}

