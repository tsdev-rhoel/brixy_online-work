import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendgiftpopularmodalPage } from './sendgiftpopularmodal.page';

describe('SendgiftpopularmodalPage', () => {
  let component: SendgiftpopularmodalPage;
  let fixture: ComponentFixture<SendgiftpopularmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendgiftpopularmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendgiftpopularmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
