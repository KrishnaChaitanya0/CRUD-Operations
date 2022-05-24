import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './Employee/employee.module';
import { Employee } from './Employee/employee.entity';

@Module({

   
  imports: [

    EmployeeModule,
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'celllabs123',
    database: 'postgres',
    entities: [Employee],
    synchronize: true,
    
  })
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
