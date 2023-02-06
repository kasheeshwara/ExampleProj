import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/Models/Teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
t:Teacher={tid:null,tname:"",taddress:""};
message:string;
  constructor(private teacherservice:TeacherService) { }

  ngOnInit(): void {
  }

  saveproduct(data:any):void
  {
   this.teacherservice.addteacher(data).subscribe(
     data=>{
       this.message="Teacher Details Added Successfully";
    }
   ) 
    console.log(data);
    console.log(this.t);
  }

  
}