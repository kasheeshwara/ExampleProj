import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { DeleteTeacherComponent } from './delete-teacher/delete-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { EmpeditComponent } from './empedit/empedit.component';
import { EmplistComponent } from './emplist/emplist.component';
import { LoginComponent } from './login/login.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TotalComponent } from './total/total.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'total',component:TotalComponent},
  {path:'emplist',component:EmplistComponent},
  {path:'empadd',component:EmpaddComponent},
  {path:'editemp/:id',component:EmpeditComponent},
  {path:'teacher-list',component:TeacherListComponent},
  {path:'add-teacher',component:AddTeacherComponent},
  {path:'edit-teacher/:id',component:EditTeacherComponent},
  {path:'delete-teacher/:id',component:DeleteTeacherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
