import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucChucNangDetailComponent } from './danh-muc-chuc-nang-detail.component';

describe('DanhMucChucNangDetailComponent', () => {
  let component: DanhMucChucNangDetailComponent;
  let fixture: ComponentFixture<DanhMucChucNangDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucChucNangDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucChucNangDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
