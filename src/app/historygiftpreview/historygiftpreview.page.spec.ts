import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorygiftpreviewPage } from './historygiftpreview.page';

describe('HistorygiftpreviewPage', () => {
  let component: HistorygiftpreviewPage;
  let fixture: ComponentFixture<HistorygiftpreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorygiftpreviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorygiftpreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
