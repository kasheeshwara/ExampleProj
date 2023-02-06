import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.css']
})
export class EmpeditComponent implements OnInit{
e:Employee;
id:string;

constructor(private empservice:EmpService,private Activatedroute:ActivatedRoute,private router:Router){
  const id=this.Activatedroute.snapshot.paramMap.get('id');
  console.log(this.id);
  this.e=this.empservice.findemp(id);

}

ngOnInit():void{

}
}
