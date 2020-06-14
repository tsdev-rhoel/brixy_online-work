import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftpopularComponent } from './giftpopular.component';

describe('GiftpopularComponent', () => {
  let component: GiftpopularComponent;
  let fixture: ComponentFixture<GiftpopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftpopularComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftpopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
