import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucLayMauDetailComponent } from './danh-muc-lay-mau-detail.component';

describe('DanhMucLayMauDetailComponent', () => {
  let component: DanhMucLayMauDetailComponent;
  let fixture: ComponentFixture<DanhMucLayMauDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucLayMauDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucLayMauDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
