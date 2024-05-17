package com.project.springBoot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.springBoot.exception.ResourceNotExistException;
import com.project.springBoot.model.Employee;
import com.project.springBoot.repository.EmployeeRepository;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")

public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping("/employee")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	@GetMapping("/employee/{id}")
	public Optional<Employee> getEmpById(@PathVariable long id) {
		return employeeRepository.findById(id);
	}
	
	
	@PostMapping("/employee")
	public Employee sendDatas(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
		
	}
	
	@DeleteMapping("/employee/{id}")
	public void deleteDatas(@PathVariable long id) {
		employeeRepository.deleteById(id);
		
	}
	
	@PutMapping("/employee/{id}")
	public ResponseEntity<Employee> updateEmp(@RequestBody Employee employee,@PathVariable long id ) {
		Employee emp=employeeRepository.findById(id).orElseThrow(()->new ResourceNotExistException("Employee Details not available for id "+id));
		emp.setFirstName(employee.getFirstName());
		emp.setLastName(employee.getLastName());
		emp.setEmailId(employee.getEmailId());
		
		Employee updatedEmp=employeeRepository.save(emp);
		return ResponseEntity.ok(updatedEmp);
		
	}
	
	
	 
	

	
}
