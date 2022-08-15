import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboradService } from '../dashborad.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
idprofile =localStorage.getItem("id") ?? "0";
repports:any[]=[];
profile:any={};

detaill:any={};

  constructor(private router:ActivatedRoute, private service :DashboradService) { }
  getProfile(id:string){
    this.service.getprofile(id).subscribe({next:(v:any)=>{console.log(v);
      this.repports=v.total_rep;this.profile=v.profile;this.detaill={"cur_pro":v.cur_pro,"cur_subpro":v.cur_subpro,"avg_rep":v.avg_rep}
    // console.log(this.idprofile);
    },error:(e:HttpErrorResponse)=>console.log(e.error.text)
    })

    
  }
  ngOnInit(): void {
    this.router.queryParamMap.subscribe({next:(v)=>{this.getProfile(this.idprofile)}
     ,error:(e)=>console.log(e.error.text)})
       
       
        
  }
 

  

}
