import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendgiftsilvermodalPage } from './sendgiftsilvermodal.page';

describe('SendgiftsilvermodalPage', () => {
  let component: SendgiftsilvermodalPage;
  let fixture: ComponentFixture<SendgiftsilvermodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendgiftsilvermodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendgiftsilvermodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
