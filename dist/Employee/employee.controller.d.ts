import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    createEmployee(newEmployee: any): void;
    getAll(): Promise<Employee[]>;
    getEmployee(id: any): Promise<Employee>;
    updateEmployee(id: any, employeeToUpdate: Employee): void;
    deleteEmployee(id: any): void;
}
