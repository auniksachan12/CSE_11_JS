package com.employee.employeemanagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public Employee addEmployee(Employee employee) {
        return repository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return repository.findById(id);
    }

    public Employee updateEmployee(Long id, Employee employee) {

        Employee emp = repository.findById(id).orElse(null);

        if (emp != null) {
            emp.setName(employee.getName());
            emp.setDepartment(employee.getDepartment());
            emp.setSalary(employee.getSalary());

            return repository.save(emp);
        }

        return null;
    }

    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }
}