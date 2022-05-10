import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsListService } from '../teams-list.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  sectionName: string | null = null;
  teamsList !: any;
  selectedRow !: any;

  constructor(private route:ActivatedRoute, private list : TeamsListService) { }

  ngOnInit(): void {
    this.sectionName = this.route.snapshot.paramMap.get('section');
    this.selectedRow = this.list.listArray.find(x => x.title == this.sectionName);
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
