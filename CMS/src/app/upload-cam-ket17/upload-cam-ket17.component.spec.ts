import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCamKet17Component } from './upload-cam-ket17.component';

describe('UploadCamKet17Component', () => {
  let component: UploadCamKet17Component;
  let fixture: ComponentFixture<UploadCamKet17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCamKet17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCamKet17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
