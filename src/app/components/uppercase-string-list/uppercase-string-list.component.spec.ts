import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercase-string-list',
  standalone: true, // If you are using standalone components
  templateUrl: './uppercase-string-list.component.html',
  styleUrls: ['./uppercase-string-list.component.css']
})
export class UppercaseStringListComponent {
  newString: string = '';
  strings: string[] = [];

  addString() {
    if (this.newString) {
      this.strings.push(this.newString.toUpperCase()); // Convert to uppercase
      this.newString = '';
    }
  }

  removeString(index: number) {
    this.strings.splice(index, 1);
  }
}
