import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-live-update-list',
  templateUrl: './live-update-list.component.html',
  styleUrls: ['./live-update-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LiveUpdateListComponent {
  // Property to hold the list of items
  items: string[] = [];
  
  // Property to bind the input field
  newItem: string = '';

  // Method to add a new item to the list
  addItem() {
    if (this.newItem.trim() !== '') {
      this.items.push(this.newItem.trim());
      this.newItem = ''; // Clear the input field
    }
  }

  // Method to remove an item from the list by index
  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
