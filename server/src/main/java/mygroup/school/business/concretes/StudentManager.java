package mygroup.school.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import mygroup.school.business.abstracts.StudentService;
import mygroup.school.core.utilities.results.DataResult;
import mygroup.school.core.utilities.results.Result;
import mygroup.school.core.utilities.results.SuccessDataResult;
import mygroup.school.core.utilities.results.SuccessResult;
import mygroup.school.dataAccess.abstracts.StudentDao;
import mygroup.school.entities.concretes.Student;


@Service
public class StudentManager implements StudentService {

	private StudentDao studentDao;
	
	@Autowired
	public StudentManager(StudentDao studentDao) {
		super();
		this.studentDao = studentDao;
	}

	@Override
	public DataResult<List<Student>> getAll() {
		return new SuccessDataResult<List<Student>>
		(this.studentDao.findAll(), "Data listelendi.");
		
	}

	@Override
	public DataResult<Student> getById(int id) {
		return new SuccessDataResult<Student>
		(this.studentDao.getById(id), "Data listelendi.");
		
	}
	
	@Override
	public DataResult<List<Student>> getByFirstName(String firstName) {
		return new SuccessDataResult<List<Student>>
		(this.studentDao.getByFirstName(firstName), "Data listelendi.");
	}
	
	@Override
	public DataResult<Student> getByFirstNameAndDepartmentId(String firstName, int departmentId) {
		return new SuccessDataResult<Student>
		(this.studentDao.getByFirstNameAndDepartment_DepartmentId(firstName, departmentId), "Data listelendi.");
	}
	
	@Override
	public DataResult<List<Student>> getByDepartmentIdIn(int[] departments) {

		return new SuccessDataResult<List<Student>>
		(this.studentDao.getByDepartmentIdIn(departments), "Data listelendi.");
	}

	@Override
	public Result add(Student student) {
		this.studentDao.save(student);
		return new SuccessResult("Başarıyla eklendi.");
	}

	@Override
	public DataResult<Student> update(int id, Student student) {
		
		Student newStudent = student;
		newStudent.setId(id);
		
		return new SuccessDataResult<Student>
		(this.studentDao.save(newStudent), "Başarıyla güncellendi.");
	}


	@Override
	public Result delete(int id) {
		this.studentDao.deleteById(id);
		
		return new SuccessResult("Başarıyla silindi.");
	}

	



	
	
	
	
	

	
	

	

}
