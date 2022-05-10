import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsListService } from '../teams-list.service';


@Component({
  selector: 'app-side-bar2',
  templateUrl: './side-bar2.component.html',
  styleUrls: ['./side-bar2.component.css']
})
export class SideBar2Component implements OnInit {

  teamsList !: any;
  constructor(private router : Router, private list : TeamsListService) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.getList();
  }

  getList()
  {
    this.list.getTeamsList()
    .subscribe(res=>{
      this.teamsList = res;
    })
  }
  
}
