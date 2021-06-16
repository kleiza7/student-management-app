import React, { useState } from "react";
import StudentService from "../../services/studentService";
import alertify from "alertifyjs";
import { Button, Form } from "semantic-ui-react";

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: "",
    department: {
      departmentId: 1,
      departmentName: "",
      departmentCapacity: 0,
    },
    gender: false,
  });

  const submitHandler = () => {
    let studentService = new StudentService();
    studentService.addStudent(studentData);
    alertify.success("Başarıyla eklendi.");
  };

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setStudentData({ ...studentData, [name]: value });
  };

  const departmentChangeHandler = (value) => {
    setStudentData({
      ...studentData,
      department: {
        departmentId: value,
        departmentName: "",
        departmentCapacity: 0,
      },
    });
  };

  const clear = () => {
    setStudentData({
      firstName: "",
      lastName: "",
      department: {
        departmentId: 1,
        departmentName: "",
        departmentCapacity: 0,
      },
      gender: false,
    });
  };

  return (
    <div>
      <Form onSubmit={submitHandler} widths="equal">
        <Form.Field>
          <label>First Name</label>
          <input
            name="firstName"
            value={studentData.firstName}
            onChange={changeHandler}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lastName"
            value={studentData.lastName}
            onChange={changeHandler}
            placeholder="Last Name"
          />
        </Form.Field>

        <Form.Group inline>
          <label>Bölüm </label>
          <Form.Radio
            label="Computer Eng"
            value={1}
            checked={studentData.department.departmentId === 1}
            onChange={(e, { value }) => departmentChangeHandler(value)}
          />

          <Form.Radio
            label="EE Eng"
            value={2}
            checked={studentData.department.departmentId === 2}
            onChange={(e, { value }) => departmentChangeHandler(value)}
          />

          <Form.Radio
            label="Architecture"
            value={3}
            checked={studentData.department.departmentId === 3}
            onChange={(e, { value }) => departmentChangeHandler(value)}
          />

          <Form.Radio
            label="Machine Eng"
            value={4}
            checked={studentData.department.departmentId === 4}
            onChange={(e, { value }) => departmentChangeHandler(value)}
          />

          <Form.Radio
            label="Civil Eng"
            value={5}
            checked={studentData.department.departmentId === 5}
            onChange={(e, { value }) => departmentChangeHandler(value)}
          />
        </Form.Group>

        <Form.Group inline>
          <label>Cinsiyet</label>
          <Form.Radio
            label="Erkek"
            value={0}
            checked={studentData.gender === 0 || studentData.gender === false}
            onChange={(e, { value }) =>
              setStudentData({ ...studentData, gender: value })
            }
          />
          <Form.Radio
            label="Kadın"
            value={1}
            checked={studentData.gender === 1 || studentData.gender === true}
            onChange={(e, { value }) =>
              setStudentData({ ...studentData, gender: value })
            }
          />
        </Form.Group>

        <Button type="submit" color="blue">
          Gönder
        </Button>
      </Form>
      <Button color="red" onClick={clear}>
        Temizle
      </Button>
    </div>
  );
};

export default StudentForm;
