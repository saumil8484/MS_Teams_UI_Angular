import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { SideBar2Component } from './side-bar2/side-bar2.component';

const routes: Routes = [
  { path:'teams', component: SideBar2Component},
  { path:'general', component: MainComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
