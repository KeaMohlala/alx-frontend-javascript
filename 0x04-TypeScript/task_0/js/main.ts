interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

const body = document.body;
const table = document.createElement("table");

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
headerRow.innerHTML = "<th>First Name</th><th>Location</th>";
thead.appendChild(headerRow);
table.appendChild(thead);


const studentList = [student1, student2];
studentList.forEach(student => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  table.appendChild(tr);
});

body.appendChild(table);
