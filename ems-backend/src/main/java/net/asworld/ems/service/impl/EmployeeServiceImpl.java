package net.asworld.ems.service.impl;

import lombok.AllArgsConstructor;
import net.asworld.ems.dto.EmployeeDto;
import net.asworld.ems.entity.Employee;
import net.asworld.ems.mapper.EmployeeMapper;
import net.asworld.ems.repository.EmployeeRepository;
import net.asworld.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
