import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCompanyInfoComponent } from './upload-company-info.component';

describe('UploadCompanyInfoComponent', () => {
  let component: UploadCompanyInfoComponent;
  let fixture: ComponentFixture<UploadCompanyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCompanyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCompanyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
