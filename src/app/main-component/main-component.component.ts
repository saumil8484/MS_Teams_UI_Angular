import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  sectionName: string | null = null;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.sectionName = this.route.snapshot.paramMap.get('section');
  }

}
