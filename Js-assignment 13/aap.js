// Sir there is a problem in sharing react file so thats why Ishare it in javascript 
import React from "react";

// Fail Component
function Fail() {
  return (
    <div className="text-red-600 font-bold">
      ❌ Fail — Better luck next time!
    </div>
  );
}

// Function to calculate grade
function getGrade(marks) {
  if (marks >= 90 && marks <= 100) return "A";
  else if (marks >= 80) return "B";
  else if (marks >= 70) return "C";
  else if (marks >= 60) return "D";
  else if (marks >= 50) return "E";
  else return "F";
}

// Main Component
export default function StudentResults() {
  const students = [
    { name: "Ali", marks: 95 },
    { name: "Sara", marks: 82 },
    { name: "Bilal", marks: 73 },
    { name: "Hina", marks: 65 },
    { name: "Ahmed", marks: 55 },
    { name: "Zain", marks: 40 },
  ];

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Student Results</h1>

      {students.map((student, index) => (
        <div key={index} className="mb-4">
          <p>
            <strong>Name:</strong> {student.name}
          </p>
          <p>
            <strong>Marks:</strong> {student.marks}
          </p>
          <p>
            <strong>Grade:</strong> {getGrade(student.marks)}
          </p>

          {student.marks < 50 && <Fail />}

          <hr className="my-3 border-gray-300" />
        </div>
      ))}
    </div>
  );
}
