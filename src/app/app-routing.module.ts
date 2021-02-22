import { ListComponent } from './list/list.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path : '', component: HomecomponentComponent},
   {path: 'view', component: ListComponent},
   {path: '**' , component: HomecomponentComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
