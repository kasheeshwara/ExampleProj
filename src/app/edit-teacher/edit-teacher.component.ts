import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/Models/Teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
message:string;
t:Teacher={tid:null,tname:"",taddress:""};
id:string;
constructor(private teacherservice:TeacherService) { }

ngOnInit(): void {
}


  update(teacher:Teacher)
  {
    let id=teacher.tid;
    this.teacherservice.editteacher(id,teacher).subscribe(
      data=>{
        this.message="Teacher details updated successfully";
      }
    )
  }

}