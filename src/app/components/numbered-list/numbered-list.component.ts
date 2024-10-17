import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-numbered-list',
  standalone: true,
  templateUrl: './numbered-list.component.html',
  styleUrls: ['./numbered-list.component.css'],
  imports: [CommonModule], // Add CommonModule here
})
export class NumberedListComponent {
  // Example list of items
  items: string[] = [
    'Item One',
    'Item Two',
    'Item Three',
    'Item Four',
    'Item Five',
  ];
}
