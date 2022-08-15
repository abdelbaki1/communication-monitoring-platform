import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { DashboradService } from '../dashborad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:DashboradService,private r:Router) { }
  f=new FormGroup({
    user: new FormControl('856585'),
    password: new FormControl('',Validators.required)});

  check(credential:any){
    this.service.Login(credential.value).subscribe(
      {next : (v:any)=>{
        this.r.navigate([""]);
        localStorage.setItem("id",v);},
         
      error:(e :HttpErrorResponse)=>{console.log(e.error.text);
      if(e.status==404){
        this.f.controls['user'].setErrors(
          {userNOTFound:true})
          console.log(this.f.controls['user']);
      }
      else if(e.status==401)
        this.f.controls['user'].setErrors({unauthorized:true})
      
      else if(e.status==500)
      this.f.controls['user'].setErrors({serveur:true})///alert
      
      
      }});
        

  }
}

 