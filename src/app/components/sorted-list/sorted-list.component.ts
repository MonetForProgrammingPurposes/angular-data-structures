import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-sorted-list',
  standalone: true,
  templateUrl: './sorted-list.component.html',
  styleUrls: ['./sorted-list.component.css'],
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule here
})
export class SortedListComponent {
  newItem: string = ''; // Variable for new item input
  items: string[] = []; // Array to hold items

  // Function to add new items to the list
  addItem() {
    const trimmedItem = this.newItem.trim(); // Trim whitespace from input
    if (trimmedItem) { // Check if input is not empty
      console.log('Adding item:', trimmedItem); // Log the new item
      this.items.push(trimmedItem); // Add to the array
      this.newItem = ''; // Clear the input field
      this.sortItems(); // Sort the items after adding
      console.log('Current sorted items:', this.items); // Log the current state of items
    }
  }

  // Function to sort the items in alphabetical order
  sortItems() {
    this.items.sort(); // Sort the array
  }

  // Function to remove an item from the list
  removeItem(index: number) {
    this.items.splice(index, 1); // Remove item at specified index
  }
}
