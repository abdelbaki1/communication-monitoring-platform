import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboradService } from '../dashborad.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit{
    id:string=localStorage.getItem("id") ?? "0";
    static subprojects : any[]=[];
    static repports : any[]=[];
  constructor(private service:DashboradService,private route :ActivatedRoute){}
  get subprojects(){
    return DashbordComponent.subprojects
  }
  get repports(){
    return DashbordComponent.repports
  }
  ngOnInit(): void {
    
    this.service.getDAsh(this.id).subscribe(
      {next:(v:any)=>{console.log(v);
       DashbordComponent.subprojects=DashbordComponent.subprojects.concat(v.subproject);
       DashbordComponent.repports=v.repports ; console.log(DashbordComponent.repports);     
        
        
      },
        error:(e)=>console.log(e.error.text)
    })
  }
 
    checkError(){ // show for every error the proper view
  }
  GotoProfile(){
    //navigate the profile with the id
  }
  GotoSubProject()
  {
    //navigate to the subproject
  }
  Isdead(date:Date){
   // if Date.getCurrentDat()-date<0:
   // return true
//return false
  }
  navigate(){
    //navigateto allsubproject
  }
  Repports(){
    //navigate to ALL repôrt to anoityher ^page
  }

}
