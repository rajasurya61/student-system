import logo from './logo.svg';
import './App.css';
import React from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';

function App() {
  return (
    <div>
      <h1>Student Management</h1>
      <StudentForm />
      <StudentTable />
    </div>
  );
}

export default App;
