import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-reverse-list',
  standalone: true,
  templateUrl: './reverse-list.component.html',
  styleUrls: ['./reverse-list.component.css'],
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule here
})
export class ReverseListComponent {
  newItem: string = ''; // Variable for new item input
  items: string[] = []; // Array to hold items

  // Function to add new items to the list
  addItem() {
    const trimmedItem = this.newItem.trim(); // Trim whitespace from input
    if (trimmedItem) { // Check if input is not empty
      console.log('Adding item:', trimmedItem); // Log the new item
      this.items.push(trimmedItem); // Add to the array
      this.newItem = ''; // Clear the input field
      console.log('Current items:', this.items); // Log the current state of items
    }
  }

  // Function to reverse the items in the list
  get reversedItems() {
    return this.items.slice().reverse(); // Return a reversed copy of the items array
  }

  // Function to remove an item from the list
  removeItem(index: number) {
    this.items.splice(index, 1); // Remove item at specified index
  }
}
