import { IFavoriteChangedEventArgs } from './IFavoriteChangedEventArgs';


export class FavoriteChangedEventArgs implements IFavoriteChangedEventArgs {
  newValue: boolean;
}
