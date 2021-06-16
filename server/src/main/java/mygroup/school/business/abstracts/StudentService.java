package mygroup.school.business.abstracts;

import java.util.List;

import mygroup.school.core.utilities.results.DataResult;
import mygroup.school.core.utilities.results.Result;
import mygroup.school.entities.concretes.Student;


public interface StudentService {
	
	DataResult<List<Student>> getAll();
	
	DataResult<Student> getById(int id);
	
	DataResult<List<Student>> getByFirstName(String firstName);
	
	DataResult<Student> getByFirstNameAndDepartmentId(String firstName, int departmentId);
	
	DataResult<List<Student>> getByDepartmentIdIn(int[] departments);
	
	Result add(Student student);
	
	DataResult<Student> update(int id, Student student);
	
	Result delete(int id);
}
