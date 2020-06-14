import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlivePage } from './viewlive.page';

describe('ViewlivePage', () => {
  let component: ViewlivePage;
  let fixture: ComponentFixture<ViewlivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
