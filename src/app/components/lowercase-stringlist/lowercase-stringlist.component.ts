import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lowercase-stringlist',
  templateUrl: './lowercase-stringlist.component.html',
  styleUrls: ['./lowercase-stringlist.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LowercaseStringListComponent {
  // Property to hold the list of strings
  stringList: string[] = [];
  
  // Property to bind the input field
  newString: string = '';

  // Method to add a new string to the list
  addString() {
    if (this.newString.trim() !== '') {
      this.stringList.push(this.newString.trim());
      this.newString = ''; // Clear the input field
    }
  }

  // Method to convert all strings in the list to lowercase
  convertToLowercase() {
    this.stringList = this.stringList.map(item => item.toLowerCase());
  }

  // Method to remove a string from the list by index
  removeString(index: number) {
    this.stringList.splice(index, 1);
  }
}
