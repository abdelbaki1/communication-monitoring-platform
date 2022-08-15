import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboradService } from '../dashborad.service';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {
  
  ngOnInit(): void {
if(!localStorage.getItem("id_project"))
    localStorage.setItem("id_project",this.service.makeid(8))
   
  }
  f=new FormGroup({
    noun: new FormControl('',[Validators.minLength(8),Validators.required]),
    id_project:new FormControl(localStorage.getItem("id_project"),Validators.required),
    id_manager:new FormControl('55646897',Validators.required),
    deadline: new FormControl('20/40/2022',Validators.required),
    
    Descrip: new FormControl('',Validators.required),
    subprojects:new FormControl(),
    activated:new FormControl(''),

  })
  public static project:any[]=[];
  constructor(private service :DashboradService,private route:Router,public datepipe: DatePipe) {
   
   
   }
  
  active(y:HTMLElement,index:number){
    console.log(y?.getAttribute("aria-expanded"));
    
    if((y?.getAttribute("aria-expanded")=="false"))
    {
 
    document.getElementsByClassName("accordion-collapse collapse")[index]?.classList.add("show");
    y?.classList.add("collapsed");
    y?.setAttribute("aria-expanded","true");
  }
    else{
      
      document.getElementsByClassName("accordion-collapse collapse show")[0]?.classList.remove("show");
      y?.classList.remove("collapsed");
      y?.setAttribute("aria-expanded","false");
    }
  }

get project() {
   return CreateprojectComponent.project;
 }
 modify(){}
 home(){this.route.navigate(["/"])////changeurl to home
}
delete(start:number,last:number ){
  CreateprojectComponent.project.splice(start,last-start);
  


}
 post(f:FormGroupDirective){
  let t= new Date();
    f.value.subprojects=CreateprojectComponent.project;
     f.value.activated=this.datepipe.transform(t, 'yyyy-MM-dd');
     
    console.log(f.value);
    return this.service.addProject(f.value)
      .subscribe(
        {
          next: (v :any ) =>{alert("ok");localStorage.removeItem("id_project");f.resetForm();this.delete(0,this.project.length)},      ///empty the subprokjects
          // this.route.navigate(["/"],{queryParams:{worker:856585}}),
          error: (e :HttpErrorResponse) => console.log(e.error.text)
        }

    );
    


  }


 }
 

