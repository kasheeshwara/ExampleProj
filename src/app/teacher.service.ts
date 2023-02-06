import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

import { Teacher} from 'src/Models/Teacher';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  t:Teacher;
  tlist:any;
  url:string="https://localhost:44386/api/Teacher";
  constructor(private httpclient:HttpClient) { }

  getteachers():Observable<Teacher[]>{
    this.tlist=this.httpclient.get(this.url);
    return this.tlist;
  }

  getteacher(id:string):Observable<Teacher>
  {
    return this.httpclient.get<Teacher>(this.url+"/GetTeacherById?id="+id);
  }
  addteacher(t:Teacher):Observable<Teacher>
  {
    return this.httpclient.post<Teacher>(this.url,t,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }

    editteacher(id:number,t:Teacher):Observable<Teacher>
  {
    return this.httpclient.put<Teacher>(this.url+"?id="+id,t,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }
    
  deleteteacher(id:number):Observable<Teacher>
  {
    return this.httpclient.delete<Teacher>(this.url+"?id="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
      
    });
    this.getteachers();
  }

  private manageError(err_response:HttpErrorResponse)
  {
    if(err_response.error instanceof ErrorEvent)
    console.error('Client Side Error:',err_response.error.message);
    else
    console.error('Server Side Error:',err_response);

    return throwError('There is a little problem while processing your request.Sorry for the inconvenience');
    
  }
}
