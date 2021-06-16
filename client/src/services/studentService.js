import axios from 'axios';

export default class StudentService{

    getStudents(){
        return axios.get("http://localhost:8080/api/students/getall");
    }

    addStudent(student){
        return axios.post("http://localhost:8080/api/students/add", student);
    }

    updateStudent(id, student){
        return axios.put(`http://localhost:8080/api/students/update?id=${id}`, student);
    }

    deleteStudent(id){
        return axios.delete(`http://localhost:8080/api/students/delete?id=${id}`);
    }
}