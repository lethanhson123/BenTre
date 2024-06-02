import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadNhuyenThe02ManhVoComponent } from './upload-nhuyen-the02-manh-vo.component';

describe('UploadNhuyenThe02ManhVoComponent', () => {
  let component: UploadNhuyenThe02ManhVoComponent;
  let fixture: ComponentFixture<UploadNhuyenThe02ManhVoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadNhuyenThe02ManhVoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadNhuyenThe02ManhVoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
