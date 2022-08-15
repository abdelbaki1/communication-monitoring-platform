import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateprojectComponent } from '../createproject/createproject.component';
import { DashboradService } from '../dashborad.service';

@Component({
  selector: 'app-create-subproject',
  templateUrl: './create-subproject.component.html',
  styleUrls: ['./create-subproject.component.css']
})
export class CreateSubprojectComponent implements OnInit  {
  constructor(private router:Router ,private service:DashboradService,private route:ActivatedRoute){}

  f=new FormGroup({
    id:new FormControl(this.service.makeid(3)),
    name:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    id_worker:new FormControl('',Validators.required),
    deadline:new FormControl('',Validators.required),
    id_project:new FormControl(localStorage.getItem("id_project"))


})
ngOnInit(): void {
  this.route.queryParamMap.subscribe({next:(p)=>{let index=parseInt(p.get('index') ?? "-1")
  this.f.value.description=CreateprojectComponent.project[index].descript
  
  
}})
}
  addsub(f:any): void{
    CreateprojectComponent.project.push(f.value);
    
  
  this.router.navigate(['createProject'])

  }
}


  


