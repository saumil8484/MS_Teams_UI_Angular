import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBar21Component } from './side-bar21.component';

describe('SideBar21Component', () => {
  let component: SideBar21Component;
  let fixture: ComponentFixture<SideBar21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBar21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBar21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
