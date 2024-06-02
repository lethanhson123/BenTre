import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauHoiNhomComponent } from './cau-hoi-nhom.component';

describe('CauHoiNhomComponent', () => {
  let component: CauHoiNhomComponent;
  let fixture: ComponentFixture<CauHoiNhomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CauHoiNhomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CauHoiNhomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
