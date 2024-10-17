import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ImageListComponent {
  // Array of image objects with URL and optional alt text and description
  images = [
    { url: 'https://via.placeholder.com/300', alt: 'Placeholder Image 1', description: 'This is image 1' },
    { url: 'https://via.placeholder.com/300', alt: 'Placeholder Image 2', description: 'This is image 2' },
    { url: 'https://via.placeholder.com/300', alt: 'Placeholder Image 3', description: 'This is image 3' }
  ];

  // Method to add a new image
  addImage(newUrl: string, newAlt: string, newDescription: string) {
    if (newUrl.trim() !== '') {
      this.images.push({ url: newUrl, alt: newAlt, description: newDescription });
    }
  }

  // Method to remove an image by index
  removeImage(index: number) {
    this.images.splice(index, 1);
  }
}
