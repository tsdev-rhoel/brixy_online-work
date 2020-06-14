import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveprofilePage } from './liveprofile.page';

describe('LiveprofilePage', () => {
  let component: LiveprofilePage;
  let fixture: ComponentFixture<LiveprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveprofilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
