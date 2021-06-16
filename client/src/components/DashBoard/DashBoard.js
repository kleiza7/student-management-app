import React, { useState } from "react";
import StudentList from "../StudentList/StudentList";
import StudentDetails from "../StudentDetails/StudentDetails";
import { Route } from "react-router";
import StudentForm from "../StudentForm/StudentForm";

const DashBoard = () => {
  const [currentStudent, setCurrentStudent] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    department: {
      departmentId: 1,
      departmentName: "",
      departmentCapacity: 0,
    },
    gender:0
  });

  return (
    <div>
      <Route
        exact
        path="/"
        component={() => <StudentList setCurrentStudent={setCurrentStudent} />}
      />
      <Route
        exact
        path="/studentDetails"
        component={() => <StudentDetails currentStudent={currentStudent} />}
      />
      <Route exact path="/addStudent" component={() => <StudentForm />} />
    </div>
  );
};

export default DashBoard;
