import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichageRapportComponent } from './affichage-rapport/affichage-rapport.component';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { CreateReportComponent } from './create-report/create-report.component';
import { CreateSubprojectComponent } from './create-subproject/create-subproject.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { RapportComponent } from './rapport/rapport.component';
import { ShowprojectComponent } from './showproject/showproject.component';

const routes: Routes = [{path:'login',component:LoginComponent},{path:'',component:DashbordComponent,canActivate:[AuthService]},{
  path:'viewreports',component:AffichageRapportComponent,canActivate:[AuthService]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthService]},
  {path:'project',component:ShowprojectComponent,canActivate:[AuthService]},
  {path:"CreateRepport",component:CreateReportComponent,canActivate:[AuthService]},
  {path:"projects",component:ProjectlistComponent,canActivate:[AuthService]},
   {path:"repport",component:RapportComponent,canActivate:[AuthService]},
   {
     path:"createProject",component:CreateprojectComponent,canActivate:[AuthService]
   },
       { path:"createProject/createSubproject",component:CreateSubprojectComponent,canActivate:[AuthService]
      
    },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
