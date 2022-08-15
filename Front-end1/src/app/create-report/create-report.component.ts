import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { DashboradService } from '../dashborad.service';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent{
  constructor(private service :DashboradService,private route :Router) { }
  f=new FormGroup({
    id_repport: new FormControl(''),
    title: new FormControl(''),
    typ: new FormControl('type'),
    des: new FormControl(''),
    written: new FormControl(),
    id_sub_project: new FormControl('KfA4XUkQXUx'),
    id_worker: new FormControl('856585')
  })
  send(f:any){
    let time=new Date();
    f.value.id_repport=f.value.id_subproject+this.service.makeid(4) ;
    f.value.written=time.toLocaleDateString();
    console.log(f);
    
    return this.service.createReport(f.value)
      .subscribe(
        {
          next: (v :any ) =>
          this.route.navigate(["viewreports"],{queryParams:{worker:856585}}),
          
          error: (e :HttpErrorResponse) => console.log(e.error.text)}
    );
    


  }

  

}
