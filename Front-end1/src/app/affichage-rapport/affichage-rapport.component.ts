import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboradService } from '../dashborad.service';
import { DashbordComponent } from '../dashbord/dashbord.component';

@Component({
  selector: 'app-affichage-rapport',
  templateUrl: './affichage-rapport.component.html',
  styleUrls: ['./affichage-rapport.component.css']
})
export class AffichageRapportComponent implements OnInit {
  repports: any[]=[];
  idworker:number=0;

  constructor(private route:ActivatedRoute, private service:DashboradService) {
   }

   ngOnInit(){
    this.route.queryParamMap.subscribe({next:(v)=>
      this.idworker=parseInt( v.get('worker') ?? "0000")})
      this.repports=this.repports.concat(DashbordComponent.repports)
      console.log(this.repports);
    // this.service.getReports(this.idworker).subscribe(
    //   {next:(v:any)=>{this.repports=this.repports.concat(v);console.log(this.repports)}
    //   ,error:(e)=>console.log(e.error.text)}
    //   );
   }
   deleteReport(id_report:number,index:number){
     alert("are you sure you want to delete the reoport n°"+id_report.toString());
       this.service.deleteReport(id_report).subscribe({next:(v)=> alert("repports,"+v.toString()+" has been deleted ")})
       DashbordComponent.repports.splice(index-1,1);
       this.repports.splice(index-1,1);
   }
  }
