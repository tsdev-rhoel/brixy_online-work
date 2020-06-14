import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsilverComponent } from './giftsilver.component';

describe('GiftsilverComponent', () => {
  let component: GiftsilverComponent;
  let fixture: ComponentFixture<GiftsilverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftsilverComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsilverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
