import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  
  @Input("is-favorite") isFavorite: boolean;

  faStar = faStar;
  faStarEmpty = faStarEmpty;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleFavorite = () => {
    this.isFavorite = ! this.isFavorite;
  }

}
