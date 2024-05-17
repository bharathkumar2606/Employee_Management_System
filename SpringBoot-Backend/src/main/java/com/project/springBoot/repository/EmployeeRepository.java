package com.project.springBoot.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.springBoot.model.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>
{
	
}
