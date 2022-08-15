import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RapportComponent } from './rapport/rapport.component';
import { AffichageRapportComponent } from './affichage-rapport/affichage-rapport.component';
import { ProfileComponent } from './profile/profile.component';
import { ShowprojectComponent } from './showproject/showproject.component';
import { environment } from 'src/environments/environment';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CreateReportComponent } from './create-report/create-report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { Summry } from './Summry.pipe';
import { CreateprojectComponent } from './createproject/createproject.component';
import { CreateSubprojectComponent } from './create-subproject/create-subproject.component';
import { DatePipe } from '@angular/common';
import { AuthService } from './auth.service';
import { TokeninterceptorService } from './tokeninterceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    RapportComponent,
    AffichageRapportComponent,
    ProfileComponent,
    ShowprojectComponent,
    DashbordComponent,
    CreateReportComponent,
    LoginComponent,
    RegisterComponent,
    ProjectlistComponent,
    Summry,
    CreateprojectComponent,
    CreateSubprojectComponent
  
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [DatePipe,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
