import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  details: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Add FormsModule here
})
export class EmployeeListComponent {
  // Sample data: List of employees
  employees: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Development',
      details: 'John is a software engineer with 5 years of experience.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Project Manager',
      department: 'Management',
      details: 'Jane oversees various projects and teams.'
    },
    {
      id: 3,
      name: 'Emily Johnson',
      position: 'Designer',
      department: 'Design',
      details: 'Emily specializes in UI/UX design.'
    }
    // Add more employees as needed
  ];

  searchQuery: string = '';

  // Filtered employees based on the search query
  get filteredEmployees(): Employee[] {
    return this.employees.filter(employee =>
      employee.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Method to view more details about an employee
  viewDetails(employee: Employee): void {
    alert(`Details of ${employee.name}:\n${employee.details}`);
  }
}
