import { Injectable } from '@angular/core';
import { Employee } from 'src/Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  e:Employee={eid:101,ename:"kashi",salary:10000,doj:new Date('1/4/2022')};
  elist:Employee[]=[
    {eid:101,ename:"kashi",salary:5000,doj:new Date('3/4/2021')},
    {eid:102,ename:"nag",salary:8000,doj:new Date('4/6/2022')},
    {eid:103,ename:"manoj",salary:6000,doj:new Date('12/4/2020')},
    {eid:104,ename:"neel",salary:14000,doj:new Date('3/6/2022')}
  ]
  empid: number;
  

  addemp(e:Employee):any{
    this.elist.push(e);
    console.log('Data entered successfully');
  }
  refreshList():Employee[]{
    return this.elist;
  }

  findemp(id:string):any{
    this.empid=Number(id);
    this.e=this.elist.find(x=>x.eid==this.empid);
    return this.e;
  }
  constructor() { }
}
