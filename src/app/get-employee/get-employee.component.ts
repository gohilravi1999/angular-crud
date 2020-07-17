import { Component, OnInit, ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {

  @Input() employee : {name:string,mobile:string,email:string,gender:string;dateOfJoining:any}[];
  @Output() employeeDeleted = new EventEmitter<number>();
  @Output() employeeEdited = new EventEmitter<{employee:Employee,index:number}>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteEmployee(index:number){
    this.employeeDeleted.emit(index);
  }

  onEditEmployee(employee:Employee,index:number){
    this.employeeEdited.emit({employee,index});
  }
}
