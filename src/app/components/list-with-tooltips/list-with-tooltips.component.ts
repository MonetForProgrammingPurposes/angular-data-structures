import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-with-tooltips',
  templateUrl: './list-with-tooltips.component.html',
  styleUrls: ['./list-with-tooltips.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ListWithTooltipsComponent {
  // Example list of items with tooltips
  items = [
    { name: 'Item 1', tooltip: 'This is the first item' },
    { name: 'Item 2', tooltip: 'This is the second item' },
    { name: 'Item 3', tooltip: 'This is the third item' },
    { name: 'Item 4', tooltip: 'This is the fourth item' },
    { name: 'Item 5', tooltip: 'This is the fifth item' }
  ];
}
