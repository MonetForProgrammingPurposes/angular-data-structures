import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class FavoritesListComponent {
  // Sample data: List of favorite items
  favoriteItems: string[] = ['Ice Cream', 'Pizza', 'Chocolate', 'Burgers', 'Sushi'];

  // Method to remove an item from the favorites list
  removeFavorite(item: string): void {
    this.favoriteItems = this.favoriteItems.filter(favorite => favorite !== item);
  }
}
