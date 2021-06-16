package mygroup.school.api.controllers;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import mygroup.school.business.abstracts.StudentService;
import mygroup.school.core.utilities.results.DataResult;
import mygroup.school.core.utilities.results.Result;
import mygroup.school.entities.concretes.Student;

@RestController
@RequestMapping("/api/students")
@CrossOrigin
public class StudentsController {
	
	private StudentService studentService;
	
	@Autowired
	public StudentsController(StudentService studentService) {
		super();
		this.studentService = studentService;
	}


	@GetMapping("/getall")
	public DataResult<List<Student>> getAll(){
		return this.studentService.getAll();
	}
	
	@GetMapping("/getByFirstName")
	public DataResult<List<Student>> getByFirstName(@RequestParam String firstName) {
		return this.studentService.getByFirstName(firstName);
	}
	
	@GetMapping("/getById")
	public DataResult<Student> getById(@RequestParam int id) {
		return this.studentService.getById(id);
	}
	
	@GetMapping("/getByFirstNameAndDepartmentId")
	public DataResult<Student> getByFirstNameAndDepartmentId(@RequestParam("firstName") String firstName, @RequestParam("departmentId") int departmentId){
		return this.studentService.getByFirstNameAndDepartmentId(firstName, departmentId);
	}
	
	
	@GetMapping("/getByDepartmentIdIn")
	public DataResult<List<Student>> getByDepartmentIdIn(@RequestParam int[] departments){
		return this.studentService.getByDepartmentIdIn(departments);
	}
	
	@PostMapping("/add")
	public Result add(@RequestBody Student student) {
		return this.studentService.add(student);
	}
	
	@PutMapping("/update")
	public DataResult<Student> update(@RequestParam int id, @RequestBody Student student) {
		return this.studentService.update(id, student);
	}
	
	@DeleteMapping("/delete")
	public Result delete(@RequestParam int id) {
		return this.studentService.delete(id);
	}
	
	

	
}


