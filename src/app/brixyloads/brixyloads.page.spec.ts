import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrixyloadsPage } from './brixyloads.page';

describe('BrixyloadsPage', () => {
  let component: BrixyloadsPage;
  let fixture: ComponentFixture<BrixyloadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrixyloadsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrixyloadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
