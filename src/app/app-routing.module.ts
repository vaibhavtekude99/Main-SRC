import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorDetailsHomeComponent } from './components/directorDetails/director-details-home/director-details-home.component';
import { EmployeeDetailsHomeComponent } from './components/employeeDetails/employee-details-home/employee-details-home.component';
import { LoginHomeComponent } from './components/loginDetails/login-home/login-home.component';
import { ProjectManagerDetailsHomeComponent } from './components/projectManagerDetails/project-manager-details-home/project-manager-details-home.component';
import { TravelAgentDetailsHomeComponent } from './components/travelAgentDetails/travel-agent-details-home/travel-agent-details-home.component';

const routes: Routes = [

 // {path:'',redirectTo:'goToLogin', pathMatch:'full'},
  {path:'gotologin',component:LoginHomeComponent},
  {path:'employeehome',component:EmployeeDetailsHomeComponent},
  {path:'agenthome', component:TravelAgentDetailsHomeComponent},
  {path:'directorhome', component:DirectorDetailsHomeComponent},
  {path:'projectmanager', component:ProjectManagerDetailsHomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
