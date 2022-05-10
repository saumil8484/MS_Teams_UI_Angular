import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { SideBar2Component } from './side-bar2/side-bar2.component';
import { SideBar21Component } from './side-bar21/side-bar21.component';

const routes: Routes = [
  { path:'chats', component: SideBar2Component, children: [{ path:':section', component: MainComponentComponent}]},
  { path: ':functionality', component: SideBar21Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
