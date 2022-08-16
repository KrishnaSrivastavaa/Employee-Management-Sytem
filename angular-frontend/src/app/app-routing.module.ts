import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'employees', component: EmployeeListComponent, canActivate:[AuthGuard]},
  {path:'create-employee', component: CreateEmployeeComponent, canActivate:[AuthGuard]},
  {path:'update-employee/:id',component:UpdateEmployeeComponent, canActivate:[AuthGuard]},
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent,pathMatch:'full', canActivate:[AuthGuard]},
  {path:'employee-details/:id',component:EmployeeDetailsComponent,canActivate:[AuthGuard]}
  // {path:'',redirectTo:'employees',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
