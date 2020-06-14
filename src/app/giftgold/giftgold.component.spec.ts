import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftgoldComponent } from './giftgold.component';

describe('GiftgoldComponent', () => {
  let component: GiftgoldComponent;
  let fixture: ComponentFixture<GiftgoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftgoldComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftgoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
