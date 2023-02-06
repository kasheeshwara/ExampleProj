import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/Models/Teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
teacherlist:Teacher[];
teacher:Teacher;
message:string;
  constructor(private teacherservice:TeacherService) { }
  



  ngOnInit(): void {
    this.teacherservice.getteachers().subscribe(
      data=>{
        this.teacherlist=data;
        console.log(this.teacherlist);
      }
      
    )
  }

  clickMethod(teacher: Teacher) {
    if(confirm("Are you sure to delete "+teacher.tname)) {
      this.teacherservice.deleteteacher(teacher.tid).subscribe()
      {
      this.message="Teacher Details deleted Successfully";
    //  this.productservice.getproducts();
      // this.ngOnInit();
      this.teacherlist = this.teacherlist.filter(item => item.tid !=teacher.tid);
      console.log(this.teacherlist.length);
      }
      
    }
  }

  
}