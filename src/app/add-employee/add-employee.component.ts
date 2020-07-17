import { Component, OnInit, Output ,EventEmitter, Input, SimpleChanges} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Input() editEmployee : Employee;
  @Output() employeeCreated = new EventEmitter<Employee>();
  @Output() employeeEdited = new EventEmitter<Employee>();


  employeeGender = ['male','female'];
  employeeForm : FormGroup;
   count : number;

  constructor() { }

  ngOnInit() {
    this.count=0;
      this.employeeForm = new FormGroup({
        'name':new FormControl(null,[Validators.required,Validators.minLength(2)]),
        'mobile':new FormControl(null,[Validators.required,
          Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[0-9]*$/)]),
        'email':new FormControl(null,[Validators.required,Validators.email]),
        'gender':new FormControl('male',Validators.required),
        'dateOfJoining':new FormControl(null,Validators.required)
      });  
 }    
 ngOnChanges(changes: SimpleChanges) {
  this.count=1;
  if(changes['editEmployee']) {
    this.employeeForm.get('name').setValue(this.editEmployee.name);
    this.employeeForm.get('mobile').setValue(this.editEmployee.mobile);
    this.employeeForm.get('email').setValue(this.editEmployee.email);
    this.employeeForm.get('gender').setValue(this.editEmployee.gender);
    this.employeeForm.get('dateOfJoining').setValue(this.editEmployee.dateOfJoining);
  }
}

  onSubmit(){
    if(this.count===0){
      this.employeeCreated.emit(this.employeeForm.value);  
  }else{
    this.employeeEdited.emit(this.employeeForm.value);
    this.editEmployee = null;
    this.count=0;
  }
  this.employeeForm.reset();
    this.employeeForm.get('gender').setValue('male');
  }

}
