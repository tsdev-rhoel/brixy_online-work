import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowvideoComponent } from './showvideo.component';

describe('ShowvideoComponent', () => {
  let component: ShowvideoComponent;
  let fixture: ComponentFixture<ShowvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowvideoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
