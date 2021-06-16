import React, { useState, useEffect } from "react";
import StudentService from "../../services/studentService";
import "./StudentList.css";
import { Table } from "semantic-ui-react";

const StudentList = ({ setCurrentStudent }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    let studentService = new StudentService();
    studentService
      .getStudents()
      .then((result) => setStudents(result.data.data))
      .catch((error) => console.log(error));
  }, []);

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
          {students.map((student) => (
            <Table.Row onClick={() => setCurrentStudent(student)} className="tableRow" key={student.id}>
              <Table.Cell>{student.firstName}</Table.Cell>
              <Table.Cell>{student.lastName}</Table.Cell>
              <Table.Cell>{student.department.departmentName}</Table.Cell>
              <Table.Cell>{student.gender ? 'Kadın' : 'Erkek'}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default StudentList;
