import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftbronzeComponent } from './giftbronze.component';

describe('GiftbronzeComponent', () => {
  let component: GiftbronzeComponent;
  let fixture: ComponentFixture<GiftbronzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftbronzeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftbronzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
