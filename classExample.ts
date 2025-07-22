// ==========================================================
// EXAMPLE 1: Create object and assign values after creation
// ==========================================================

class EmployeeDemo {
  empid!: number;      // "!" indicates value will be assigned later
  empname!: string;

  display(): void {
    console.log("Employee ID:", this.empid);
    console.log("Employee Name:", this.empname);
  }
}

// Create object
let emp = new EmployeeDemo();

// Assign values after creation
emp.empid = 10;
emp.empname = "Diva";

// Call method
emp.display();

console.log("===================================================");


// ==================================================================
// EXAMPLE 2: Assign default values and set the values via a method
// ==================================================================

class EmpAssignDefaultValues {
  empid: number = 0;
  empname: string = "";

  // Method to set and display values
  dis(id: number, name: string): void {
    this.empid = id;
    this.empname = name;
    console.log("Employee ID:", this.empid);
    console.log("Employee Name:", this.empname);
  }
}

let empAssignDefaultValues = new EmpAssignDefaultValues();
empAssignDefaultValues.dis(101, "Divakar");

console.log("===================================================");


// ==================================================================
// EXAMPLE 3: Set the values using a method and call display method
// ==================================================================

class EmpSetTheValues {
  empid: number = 0;
  empname: string = "";

  // Method to set values
  setValues(id: number, name: string): void {
    this.empid = id;
    this.empname = name;
    this.display(); // Call display from within setValues
  }

  // Method to display values
  display(): void {
    console.log("Employee ID:", this.empid);
    console.log("Employee Name:", this.empname);
  }
}

let empSetTheValues = new EmpSetTheValues();
empSetTheValues.setValues(201, "Rupa");

console.log("===================================================");


// ======================================================================
// EXAMPLE 4: Use constructor to initialize and call the display method
// ======================================================================

class EmpConstructor {
  empid: number;
  empName: string;

  // Constructor to initialize values
  constructor(id: number, name: string) {
    this.empid = id;
    this.empName = name;
  }

  // Method to display values
  display(): void {
    console.log("Employee ID:", this.empid);
    console.log("Employee Name:", this.empName);
  }
}

let empConstructor = new EmpConstructor(501, "Diva");
empConstructor.display();

console.log("===================================================");


// ======================================================================================
// EXAMPLE 5: Simulating Multiple Constructors using Optional Parameters and Overloading
// ======================================================================================

class Car {
  brand: string;
  year: number;

  // Constructor Overload Signatures (Only for Type Checking)
  constructor(brand: string);
  constructor(brand: string, year: number);

  // Actual Implementation
  constructor(brand: string, year?: number) {
    this.brand = brand;
    this.year = year ?? 2020; // If year not provided, default to 2020
  }

  // Display Method
  display(): void {
    console.log("Car Brand:", this.brand);
    console.log("Manufacturing Year:", this.year);
  }
}

const c1 = new Car("Toyota");     // Uses default year
c1.display();

console.log("----------------------");

const c2 = new Car("Ford", 2023); // Uses provided year
c2.display();
