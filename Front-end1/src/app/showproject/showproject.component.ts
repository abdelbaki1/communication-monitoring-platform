import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboradService } from '../dashborad.service';

@Component({
  selector: 'app-showproject',
  templateUrl: './showproject.component.html',
  styleUrls: ['./showproject.component.css']
})
export class ShowprojectComponent implements OnInit {
  DATA:any[]=[];
  id:any;

  constructor(private router:ActivatedRoute ,private service:DashboradService) {
    this.router.queryParamMap.subscribe({next:(v)=>this.id=v.get('p')
  ,error:(e)=>console.log(e.error.text)})  
    }
get(id:number){console.log("here",this.DATA);
console.log("here",this.DATA);
}
  ngOnInit(): void {
    
    this.service.getProject(this.id).subscribe(
      {next:(v)=>{this.DATA=this.DATA.concat(v);console.log("ujhyg",this.DATA[0]);
    },error:(e)=>console.log(e.error.text)})
   
    
    
  }
  

}
