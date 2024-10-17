import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-editable-list',
  templateUrl: './editable-list.component.html',
  styleUrls: ['./editable-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Add FormsModule here
})
export class EditableListComponent {
  // Sample data: List of items
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  editedItemIndex: number | null = null; // Track the index of the item being edited
  editedItemValue: string = ''; // Store the value of the item being edited

  // Start editing an item
  editItem(index: number): void {
    this.editedItemIndex = index;
    this.editedItemValue = this.items[index]; // Set the current value for editing
  }

  // Save changes made to the item
  saveItem(index: number): void {
    if (this.editedItemValue.trim() !== '') {
      this.items[index] = this.editedItemValue; // Update the item with the new value
      this.cancelEdit(); // Clear the edit state
    }
  }

  // Cancel the editing
  cancelEdit(): void {
    this.editedItemIndex = null; // Clear the edit index
    this.editedItemValue = ''; // Clear the edit value
  }
}
