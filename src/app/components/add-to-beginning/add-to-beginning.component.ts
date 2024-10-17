import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-add-to-beginning',
  templateUrl: './add-to-beginning.component.html',
  styleUrls: ['./add-to-beginning.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Add FormsModule here
})
export class AddToBeginningComponent {
  items: string[] = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ];
  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.unshift(this.newItem.trim()); // Add to the beginning of the list
      this.newItem = ''; // Clear the input after adding
    }
  }
}
