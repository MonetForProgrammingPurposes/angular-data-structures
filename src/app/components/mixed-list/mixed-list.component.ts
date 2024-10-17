import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-mixed-list',
  templateUrl: './mixed-list.component.html',
  styleUrls: ['./mixed-list.component.css'],
  standalone: true, // Marking the component as standalone
  imports: [CommonModule, FormsModule] // Add CommonModule and FormsModule here
})
export class MixedListComponent {
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
