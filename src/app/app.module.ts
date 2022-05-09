import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBar1Component } from './side-bar1/side-bar1.component';
import { SideBar2Component } from './side-bar2/side-bar2.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HttpClientModule } from '@angular/common/http';
import { SideBar21Component } from './side-bar21/side-bar21.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBar1Component,
    SideBar2Component,
    MainComponentComponent,
    SideBar21Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
