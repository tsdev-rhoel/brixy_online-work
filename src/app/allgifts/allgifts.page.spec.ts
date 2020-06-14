import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllgiftsPage } from './allgifts.page';

describe('AllgiftsPage', () => {
  let component: AllgiftsPage;
  let fixture: ComponentFixture<AllgiftsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllgiftsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllgiftsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
