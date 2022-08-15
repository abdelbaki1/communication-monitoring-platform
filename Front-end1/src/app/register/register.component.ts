import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { DashboradService } from '../dashborad.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service :DashboradService) {}
  f=new FormGroup({
    id:new FormControl('856585'),
    first: new FormControl('fi'),
    last: new FormControl('unknown'),
    password: new FormControl('12345678'),
    place: new FormControl('tunis'),
    id_manager: new FormControl('55646897'),
    email:new FormControl('em il'),
    tele: new FormControl('55'),
  });

 Add(f:FormGroupDirective){
  return this.service.register(f.value)
  .subscribe(
    {
      next: (v :any ) =>
       console.log(v),
      error: (e :HttpErrorResponse) => console.log(e.error.text)}
  
 
);
 }

}
