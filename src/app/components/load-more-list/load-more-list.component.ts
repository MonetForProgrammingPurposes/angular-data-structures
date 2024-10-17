import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-load-more-list',
  templateUrl: './load-more-list.component.html',
  styleUrls: ['./load-more-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoadMoreListComponent {
  // Sample data to display in the list
  allItems: string[] = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
    'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
    'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15'
  ];

  // Properties to control the displayed items
  displayedItems: string[] = [];
  itemsToShow: number = 5; // Number of items to show initially

  // Method to load more items
  loadMore() {
    const newItems = this.allItems.slice(this.displayedItems.length, this.displayedItems.length + this.itemsToShow);
    this.displayedItems = [...this.displayedItems, ...newItems];
  }

  // Constructor to initialize displayed items
  constructor() {
    this.loadMore(); // Load initial items
  }
}
