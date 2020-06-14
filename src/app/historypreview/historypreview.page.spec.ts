import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorypreviewPage } from './historypreview.page';

describe('HistorypreviewPage', () => {
  let component: HistorypreviewPage;
  let fixture: ComponentFixture<HistorypreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorypreviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorypreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
