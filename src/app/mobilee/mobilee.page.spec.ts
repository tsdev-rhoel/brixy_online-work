import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileePage } from './mobilee.page';

describe('MobileePage', () => {
  let component: MobileePage;
  let fixture: ComponentFixture<MobileePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
