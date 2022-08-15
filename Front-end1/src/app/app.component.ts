import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { DashboradService } from './dashborad.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private s:DashboradService,private r:Router){}
  static l=0;
  title = 'Dashboard';
  logedin(){
    return (AppComponent.l==1);
  }
  logout(){
    
    localStorage.removeItem('id');
    AppComponent.l=0;
    this.r.navigate(['login']);
    
    
  }
}
