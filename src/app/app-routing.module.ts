import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { LinkComponent } from './link/link.component';

const routes: Routes = [
  { path: '', component:DepartmentListComponent},
  {path:'emp', component:EmployeesListComponent},
  {path:'link', component:LinkComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
