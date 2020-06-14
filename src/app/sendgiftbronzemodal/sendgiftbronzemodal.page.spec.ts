import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendgiftbronzemodalPage } from './sendgiftbronzemodal.page';

describe('SendgiftbronzemodalPage', () => {
  let component: SendgiftbronzemodalPage;
  let fixture: ComponentFixture<SendgiftbronzemodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendgiftbronzemodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendgiftbronzemodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
