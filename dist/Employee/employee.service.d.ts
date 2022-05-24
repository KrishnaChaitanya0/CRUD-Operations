import { Repository } from "typeorm";
import { Employee } from "./employee.entity";
export declare class EmployeeService {
    private EmployeeRepo;
    constructor(EmployeeRepo: Repository<Employee>);
    findAll(): Promise<Employee[]>;
    find(id: any): Promise<Employee>;
    create(newEmploye: any): Promise<import("typeorm").InsertResult>;
    update(id: any, employeeToUpdate: any): Promise<import("typeorm").UpdateResult>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
}
