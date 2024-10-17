import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-replace-item',
  standalone: true,
  templateUrl: './replace-item.component.html',
  styleUrls: ['./replace-item.component.css'],
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule here
})
export class ReplaceItemComponent {
  newItem: string = ''; // Variable for new item input
  items: string[] = []; // Array to hold items
  itemToReplace: string = ''; // Item to replace
  itemIndex: number | null = null; // Index of item to replace

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

  // Function to select an item to replace
  selectItem(index: number) {
    this.itemToReplace = this.items[index]; // Get the item to replace
    this.itemIndex = index; // Set the index of the item to replace
  }

  // Function to replace the selected item
  replaceItem() {
    if (this.itemIndex !== null && this.newItem.trim()) {
      console.log('Replacing item:', this.itemToReplace, 'with', this.newItem); // Log the replacement
      this.items[this.itemIndex] = this.newItem.trim(); // Replace the item
      this.newItem = ''; // Clear the input field
      this.itemToReplace = ''; // Clear the item to replace variable
      this.itemIndex = null; // Reset the index
      console.log('Current items:', this.items); // Log the current state of items
    }
  }

  // Function to remove an item from the list
  removeItem(index: number) {
    this.items.splice(index, 1); // Remove item at specified index
  }
}
