import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginHomeComponent } from './components/loginDetails/login-home/login-home.component';
import { EmployeeDetailsHomeComponent } from './components/employeeDetails/employee-details-home/employee-details-home.component';
import { DirectorDetailsHomeComponent } from './components/directorDetails/director-details-home/director-details-home.component';
import { ProjectManagerDetailsHomeComponent } from './components/projectManagerDetails/project-manager-details-home/project-manager-details-home.component';
import { TravelAgentDetailsHomeComponent } from './components/travelAgentDetails/travel-agent-details-home/travel-agent-details-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginHomeComponent,
    EmployeeDetailsHomeComponent,
    DirectorDetailsHomeComponent,
    ProjectManagerDetailsHomeComponent,
    TravelAgentDetailsHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
