import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-italicized-items',
  templateUrl: './italicized-items.component.html',
  styleUrls: ['./italicized-items.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ItalicizedItemsComponent {
  // Property to store the list of items
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  // Method to add a new item (for demonstration)
  addItem(newItem: string) {
    if (newItem.trim() !== '') {
      this.items.push(newItem);
    }
  }

  // Method to remove an item by index
  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
