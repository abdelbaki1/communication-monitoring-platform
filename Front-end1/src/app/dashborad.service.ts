import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { catchError, Observable, throwError } from 'rxjs';
import { ReportNotFound } from './ReportNotFound';
import { AppError } from './AppError';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
@Injectable({
  providedIn: 'root'
})
export class DashboradService{
  subprojects=[];
  repports=[]
  repports$: Observable<any> | undefined;
  baseUrl="http://localhost:8070/api/";
  ProjectUrl=this.baseUrl+"projects/";
  ReppotUrl=this.baseUrl+"repports/";
  SubProjectUrl=this.baseUrl+"subproject/";
  ProfiletUrl=this.baseUrl+"profile/";
  constructor(private http:HttpClient,private route:Router) {

  }
   makeid(l:number) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < l; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  /////////////dashboard/////////////////////

  getDAsh(id:string) {
    return this.http.post(`${this.ProfiletUrl}dashborad.php`,JSON.stringify(id)); 
    
  }
  ////////////////////profile/////////////////////
  getprofile(id:string){
    return this.http.post(`${this.ProfiletUrl}getProfile.php`,JSON.stringify(id));
  }
  register(data:any){
    return this.http.post(`${this.ProfiletUrl}register.php`,JSON.stringify(data));
  }
  Login(data:any){
    return this.http.post(`${this.ProfiletUrl}login.php`,JSON.stringify(data))
  }
  getReports(id :Number){
    return this.http.post(`${this.ProfiletUrl}getRepports.php`,JSON.stringify(id));
  }
  ///////////////////////report///////////////////////
  createReport(data:any){
    return this.http.post(`${this.ReppotUrl}createrepport.php`,JSON.stringify(data));
  }
  deleteReport(id :number){
    return this.http.post(`${this.ReppotUrl}deleteRepport.php`,JSON.stringify(id));
  }
  getReport(repport :any){
    return this.http.post(`${this.ReppotUrl}getRepport.php`,JSON.stringify(repport));
  }
  
  ////////////////////////project///////////////////////////
  getProject(data:any){
    return this.http.post(`${this.ProjectUrl}getProject.php`,JSON.stringify(data));
  }
  addProject(data:any){
    return this.http.post(`${this.ProjectUrl}CreateProject.php`,JSON.stringify(data));

  }
  deleteProject(data:any){


  }
  
  /////////////////////////subproject////////////////////
  getsubprojects(data:any){
    return this.http.post(`${this.SubProjectUrl}getSubproject.php`,JSON.stringify(data));
  }
  delete(){}
  ///////////////////////////////////////////
  getRecentSubProjects(URL:string){
    return this.http.get(URL).pipe(
      catchError(
      (err:HttpErrorResponse) => 
      {
        if (err.status==404)
        {
          return throwError(()=>{return new ReportNotFound(err)})
        }
          return throwError(()=>{return new AppError(err)})
      }

    
    ))
    
  }
  loggedin(){
    if(localStorage.getItem('id'))
    
       {AppComponent.l=1;return true;}
    else
     {  this.route.navigate(['/login']);AppComponent.l=0;return false}


  }

}
