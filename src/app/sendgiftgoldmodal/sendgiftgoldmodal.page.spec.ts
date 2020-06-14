import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendgiftgoldmodalPage } from './sendgiftgoldmodal.page';

describe('SendgiftgoldmodalPage', () => {
  let component: SendgiftgoldmodalPage;
  let fixture: ComponentFixture<SendgiftgoldmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendgiftgoldmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendgiftgoldmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
