import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrixyvideoPage } from './brixyvideo.page';

describe('BrixyvideoPage', () => {
  let component: BrixyvideoPage;
  let fixture: ComponentFixture<BrixyvideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrixyvideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrixyvideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
