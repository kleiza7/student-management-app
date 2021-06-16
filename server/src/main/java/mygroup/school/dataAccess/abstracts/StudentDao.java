package mygroup.school.dataAccess.abstracts;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import mygroup.school.entities.concretes.Student;

public interface StudentDao extends JpaRepository<Student, Integer>{
	
	List<Student> getByFirstName(String firstName);
	
	Student getByFirstNameAndDepartment_DepartmentId(String firstName, int departmentId);
	
	@Query("From Student where department.departmentId in (:departments)")
	List<Student> getByDepartmentIdIn(int[] departments);
}
