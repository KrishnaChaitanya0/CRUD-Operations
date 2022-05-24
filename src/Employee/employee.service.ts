import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./employee.entity";

 
 @Injectable()
export class EmployeeService{
  constructor(@InjectRepository(Employee) private EmployeeRepo: Repository<Employee>){}

  findAll(): Promise<Employee[]>{
   return this.EmployeeRepo.find();
  }

  find(id){
    return this.EmployeeRepo.findOneById(id);
  }

  create(newEmploye){
    return this.EmployeeRepo.insert(newEmploye);
  }
  update(id,employeeToUpdate){
    return this.EmployeeRepo.update(id,employeeToUpdate);
  }

  delete(id){
    return this.EmployeeRepo.delete(id);
  }
}