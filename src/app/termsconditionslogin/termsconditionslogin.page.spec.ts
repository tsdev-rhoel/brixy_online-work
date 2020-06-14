import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsconditionsloginPage } from './termsconditionslogin.page';

describe('TermsconditionsloginPage', () => {
  let component: TermsconditionsloginPage;
  let fixture: ComponentFixture<TermsconditionsloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsconditionsloginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsconditionsloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
