// src/StudentTable.js
import axios from 'axios';
import { useEffect, useState } from 'react';

function StudentTable() {
  // state to manage the list of students (get)
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/students/') // GET API to fetch the list of students 
      .then(response => setStudents(response.data)) // update state with the data fetched
      .catch(error => console.error(error)); // log error if failed. 
  }, []); // here '[]' is emptying the dependency array . 
 
  //  simple table for displaying the fetched data, css is added and imported in APP.css
  return (
    <table> 
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Enrollment Date</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.first_name}</td>
            <td>{student.last_name}</td>
            <td>{student.age}</td>
            <td>{student.email}</td>
            <td>{student.enrollment_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
