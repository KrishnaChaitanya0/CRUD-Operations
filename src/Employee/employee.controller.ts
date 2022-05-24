import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import {EmployeeService} from './employee.service';
import {Employee} from './employee.entity';
 
@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}
    

    @Post('add')
    @HttpCode(201)
    createEmployee(@Body() newEmployee:any){
	this.employeeService.create(newEmployee);
    }
    @Get('all')
    async getAll():Promise<Employee[]>{
        return this.employeeService.findAll();
    }
    @Get('/:id')
    @HttpCode(200)
    getEmployee(@Param('id') id){
       return this.employeeService.find(id);
     }
   
    @Post('update/:id')
    @HttpCode(200)
    updateEmployee(@Param('id') id,@Body() employeeToUpdate:Employee){
	this.employeeService.update(id,employeeToUpdate);
     }
    @Delete('delete/:id')
    @HttpCode(200)
    deleteEmployee(@Param('id') id){
	 this.employeeService.delete(id);
    }
}