import { Component,OnInit } from '@angular/core';
import { Employee } from 'src/Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.css']
})
export class EmpaddComponent implements OnInit{

  e:Employee={eid:101,ename:"kashi",salary:10000,doj:new Date('1/4/2022')};
  constructor(private empservice:EmpService){

  }

  ngOnInit(): void {
    
  }

  save():void{
    this.empservice.addemp(this.e);
    console.log(this.e);
  }
}
