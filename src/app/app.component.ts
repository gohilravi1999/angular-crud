import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud';
  employeeIndex :number;
  
  constructor(){}

  editedEmployee:Employee;
  employeeInfo : Employee[] = [
    new Employee('Ravi','9054413944','gohil@gmail.com','male','22/06/2020'),
    new Employee('Ravi','9054413944','gohil@gmail.com','male','22/06/2020')];

    addEmployee(employeeData : Employee){
      this.employeeInfo.push(new Employee(employeeData.name,employeeData.mobile,
                        employeeData.email,employeeData.gender,employeeData.dateOfJoining));
    }

    deleteEmployee(index:number){
      this.employeeInfo.splice(index,1);
    }

    editEmployee(employeeData:{employee:Employee,index:number}){
      this.editedEmployee = employeeData.employee;
      this.employeeIndex=employeeData.index;
    }

    editeThisEmployee(employeeData : Employee){
      this.employeeInfo[this.employeeIndex]=employeeData;
    }
}
