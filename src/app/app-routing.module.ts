import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  // {path:'dashboard',component:DashboardComponent},
  // {path:'login', component:LoginComponent},
  // {path:'cart', component:CartComponent},
  // {path:'test1', component:testComponent},
  // {path:'test2', component:testComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
