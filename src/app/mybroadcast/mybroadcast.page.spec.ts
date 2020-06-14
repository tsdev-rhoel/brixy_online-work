import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybroadcastPage } from './mybroadcast.page';

describe('MybroadcastPage', () => {
  let component: MybroadcastPage;
  let fixture: ComponentFixture<MybroadcastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybroadcastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybroadcastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
