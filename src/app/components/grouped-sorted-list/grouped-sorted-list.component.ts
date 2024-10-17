import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grouped-sorted-list',
  templateUrl: './grouped-sorted-list.component.html',
  styleUrls: ['./grouped-sorted-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class GroupedSortedListComponent {
  // Sample data: Items grouped by category
  groupedItems = [
    {
      category: 'Fruits',
      items: ['Banana', 'Apple', 'Mango', 'Orange']
    },
    {
      category: 'Vegetables',
      items: ['Carrot', 'Broccoli', 'Spinach', 'Potato']
    },
    {
      category: 'Drinks',
      items: ['Water', 'Juice', 'Soda', 'Tea']
    }
  ];

  // Sorting the groups by category and their respective items alphabetically
  getSortedGroups() {
    return this.groupedItems
      .sort((a, b) => a.category.localeCompare(b.category)) // Sort groups alphabetically by category
      .map(group => ({
        category: group.category,
        items: group.items.sort((a, b) => a.localeCompare(b)) // Sort items alphabetically within each group
      }));
  }
}
