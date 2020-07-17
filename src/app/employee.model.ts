export class Employee{
    name:string ;
    mobile:string;
    email:string;
    gender:string;
    dateOfJoining:any;

    constructor(name:string,mobile:string,email:string,gender:string,dateOfJoining:any){
        this.name= name;
        this.mobile=mobile;
        this.email=email;
        this.gender=gender;
        this.dateOfJoining=dateOfJoining;
    }
}