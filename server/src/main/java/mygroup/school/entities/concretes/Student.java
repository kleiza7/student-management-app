package mygroup.school.entities.concretes;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name="ogrenciler")
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "students"})
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="ad")
	private String firstName;
	
	@Column(name="soyad")
	private String lastName;
	
//	@Column(name="bolum_id")
//	private int departmentId;
	
	@Column(name="cinsiyet")
	private boolean gender;
	
	@ManyToOne()
	@JoinColumn(name="bolum_id")
	private Department department;
	

}
