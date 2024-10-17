import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-with-dates',
  templateUrl: './list-with-dates.component.html',
  styleUrls: ['./list-with-dates.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ListWithDatesComponent {
  // Property to store the list of items with dates
  itemsWithDates: { item: string; date: Date }[] = [];
  
  // Property for the input field
  newItem: string = '';

  // Method to add a new item with the current date
  addItem() {
    if (this.newItem.trim() !== '') {
      this.itemsWithDates.push({ item: this.newItem.trim(), date: new Date() });
      this.newItem = ''; // Clear the input field
    }
  }

  // Method to remove an item by index
  removeItem(index: number) {
    this.itemsWithDates.splice(index, 1);
  }

  // Method to sort items by date
  sortByDate() {
    this.itemsWithDates.sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}
