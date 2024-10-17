import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-object-list',
  standalone: true,
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.css'],
  imports: [CommonModule], // Add CommonModule here
})
export class ObjectListComponent {
  // Example objects
  objects: { id: number; name: string; description: string }[] = [
    { id: 1, name: 'Object 1', description: 'This is the first object.' },
    { id: 2, name: 'Object 2', description: 'This is the second object.' },
    { id: 3, name: 'Object 3', description: 'This is the third object.' },
    // Add more objects as needed
  ];
}
