package mygroup.school.entities.concretes;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Table(name="bolumler")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "students"})
public class Department {

	@Id
	@Column(name="bolum_id")
	private int departmentId;
	
	@Column(name="bolum_ad")
	private String departmentName;
	
	@Column(name="bolum_kapasite")
	private int departmentCapacity;
	
	@OneToMany(mappedBy="department")
	private List<Student> students;
	
}
