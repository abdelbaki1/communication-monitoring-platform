import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboradService } from '../dashborad.service';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {
  repportdetail:any;
  repnumber: any;

  constructor(private route:ActivatedRoute,private service:DashboradService ) { 
    
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe({next:(v)=>this.repnumber=v.get('id') ?? "-1"});
    this.service.getReport(this.repnumber).subscribe({next:(v:any)=>{this.repportdetail=v;console.log(v);
    
    },error:(e)=>{console.log(e.error.text);
    }})

  }

}
