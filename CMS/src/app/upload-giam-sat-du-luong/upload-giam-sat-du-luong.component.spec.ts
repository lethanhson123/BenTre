import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGiamSatDuLuongComponent } from './upload-giam-sat-du-luong.component';

describe('UploadGiamSatDuLuongComponent', () => {
  let component: UploadGiamSatDuLuongComponent;
  let fixture: ComponentFixture<UploadGiamSatDuLuongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadGiamSatDuLuongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadGiamSatDuLuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
