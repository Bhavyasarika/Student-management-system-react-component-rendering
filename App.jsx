import React from "react";

function Student() {
  const students = [
    { id: 1, name: "Ravi", marks: 85 },
    { id: 2, name: "Sita", marks: 90 },
    { id: 3, name: "Ram", marks: 65 }
  ];

  return (
    <div>
      <h2>Student Management System</h2>

      {students.map((s) => (
        <div key={s.id}>
          <p>Name: {s.name}</p>
          <p>Marks: {s.marks}</p>
          <p>{s.marks >= 70 ? "Pass" : "Fail"}</p>
        </div>
      ))}
    </div>
  );
}

export default Student;
