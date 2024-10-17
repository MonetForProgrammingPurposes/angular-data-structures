import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grouped-list',
  templateUrl: './grouped-list.component.html',
  styleUrls: ['./grouped-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class GroupedListComponent {
  // Sample data: Grouped items by categories
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
}
