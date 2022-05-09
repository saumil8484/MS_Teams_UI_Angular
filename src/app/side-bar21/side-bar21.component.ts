import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar21',
  templateUrl: './side-bar21.component.html',
  styleUrls: ['./side-bar21.component.css']
})
export class SideBar21Component implements OnInit {

  functionalityName: string | null = null;

  constructor(private route:ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.functionalityName = this.route.snapshot.paramMap.get('functionality');
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

}
