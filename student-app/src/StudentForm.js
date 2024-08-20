import axios from 'axios';
import { useState } from 'react';

function StudentForm() {
  const [student, setStudent] = useState({
    // managing form data for the student
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    enrollment_date: ''
  });

  const handleChange = (e) => {
    // handler to handle changes to the input fields
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/students/', student) // Send POST request with the details entered in the form
      .then(response => console.log(response)) // log successs response
      .catch(error => console.error(error)); // log error if failed
  };

  // simple form and submit button, css is added and imported in APP.css
  return (
    <form onSubmit={handleSubmit}>
      <h2>Fill the student details below </h2>
      <div>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          value={student.first_name}
          onChange={handleChange}
          placeholder="First Name"
          
        />
      </div>
      
      <div>
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          value={student.last_name}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </div>
      
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          value={student.age}
          onChange={handleChange}
          placeholder="Age"
        />
      </div>
      
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      
      <div>
        <label htmlFor="enrollment_date">Enrollment Date</label>
        <input
          type="date"
          name="enrollment_date"
          id="enrollment_date"
          value={student.enrollment_date}
          onChange={handleChange}
        />
      </div>
      
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
