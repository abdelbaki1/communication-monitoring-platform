import { Component, OnInit } from '@angular/core';
import { DashboradService } from '../dashborad.service';
import { DashbordComponent } from '../dashbord/dashbord.component';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

subproject:any[]=[];
constructor(private service:DashboradService){}
  ngOnInit(): void {
    this.subproject=DashbordComponent.subprojects;
    console.log(this.subproject);
    
  }


}
