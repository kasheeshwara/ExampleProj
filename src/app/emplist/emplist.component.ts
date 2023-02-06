import { Component,OnInit } from '@angular/core';
import { Employee } from 'src/Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit{
  
  elist:Employee[];


  constructor(private empservice:EmpService){

  }

  ngOnInit(): void {
    this.elist=this.empservice.refreshList();
    console.log(this.elist);
}
}
