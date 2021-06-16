import React, { useState } from "react";
import "./StudentDetails.css";
import StudentService from "../../services/studentService";
import { Table, Button, Container, Form } from "semantic-ui-react";
import alertify from "alertifyjs";

const StudentDetails = ({ currentStudent }) => {
  const [studentData, setStudentData] = useState(currentStudent);
  const [isUpdate, setIsUpdate] = useState(false);

  const [firstStudent, setFirstStudent] = useState({});

  const updateStudent = (id, student) => {
    let studentService = new StudentService();

    studentService
      .updateStudent(id, studentData)
      .then((res) => alertify.success("Başarıyla güncellendi."))
      .catch((err) => alertify.error("Güncelleme işlemi başarısız."));

    setIsUpdate(false);
  };

  const deleteStudent = (id) => {
    let studentService = new StudentService();
    studentService.deleteStudent(id);

    alertify.success("Başarıyla silindi.");
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
        departmentName:
          value === 1
            ? "ceng"
            : value === 2
            ? "eem"
            : value === 3
            ? "architecture"
            : value === 4
            ? "machine engineering"
            : value === 5
            ? "civil engineering"
            : "",
        departmentCapacity: 0,
      },
    });
  };

  const cancelUpdate = () => {
    setStudentData(firstStudent);
    setIsUpdate(false);
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ad</Table.HeaderCell>
            <Table.HeaderCell>Soyad</Table.HeaderCell>
            <Table.HeaderCell>Bölüm</Table.HeaderCell>
            <Table.HeaderCell>Cinsiyet</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {isUpdate ? (
            <Table.Row key={studentData.id}>
              <Table.Cell>
                <Form.Field>
                  <input
                    name="firstName"
                    value={studentData.firstName}
                    onChange={changeHandler}
                    placeholder="First Name"
                  />
                </Form.Field>
              </Table.Cell>
              <Table.Cell>
                <Form.Field>
                  <input
                    name="lastName"
                    value={studentData.lastName}
                    onChange={changeHandler}
                    placeholder="Last Name"
                  />
                </Form.Field>
              </Table.Cell>
              <Table.Cell>
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
              </Table.Cell>
              <Table.Cell>
                <Form.Group inline>
                  <Form.Radio
                    label="Erkek"
                    value={0}
                    checked={
                      studentData.gender === 0 || studentData.gender === false
                    }
                    onChange={(e, { value }) => {
                      setStudentData({ ...studentData, gender: value });
                    }}
                  />
                  <Form.Radio
                    label="Kadın"
                    value={1}
                    checked={
                      studentData.gender === 1 || studentData.gender === true
                    }
                    onChange={(e, { value }) => {
                      setStudentData({ ...studentData, gender: value });
                    }}
                  />
                </Form.Group>
              </Table.Cell>
            </Table.Row>
          ) : (
            <Table.Row key={studentData.id}>
              <Table.Cell>{studentData.firstName}</Table.Cell>
              <Table.Cell>{studentData.lastName}</Table.Cell>
              <Table.Cell>{studentData.department.departmentName}</Table.Cell>
              <Table.Cell>{studentData.gender ? "Kadın" : "Erkek"}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>

      {isUpdate ? (
        <Container>
          <Button
            color="blue"
            content="Kaydet"
            onClick={() => updateStudent(studentData.id, studentData)}
          />
          <Button color="red" content="İptal" onClick={() => cancelUpdate()} />
        </Container>
      ) : (
        <Container>
          <Button
            color="blue"
            content="Düzenle"
            onClick={() => {
              setIsUpdate(true);
              setFirstStudent(studentData);
            }}
          />
          <Button
            color="red"
            content="Sil"
            onClick={() => deleteStudent(studentData.id)}
          />
        </Container>
      )}
    </div>
  );
};

export default StudentDetails;
