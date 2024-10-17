import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expandable-collapsible-list',
  templateUrl: './expandable-collapsible-list.component.html',
  styleUrls: ['./expandable-collapsible-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ExpandableCollapsibleListComponent {
  // Sample data: Items with details
  items = [
    {
      title: 'Item 1',
      details: 'Details about Item 1. Lorem ipsum dolor sit amet.',
      isExpanded: false
    },
    {
      title: 'Item 2',
      details: 'Details about Item 2. Consectetur adipiscing elit.',
      isExpanded: false
    },
    {
      title: 'Item 3',
      details: 'Details about Item 3. Sed do eiusmod tempor incididunt.',
      isExpanded: false
    }
  ];

  // Toggle the expanded state of an item
  toggleExpand(item: { isExpanded: boolean }): void {
    item.isExpanded = !item.isExpanded;
  }
}
