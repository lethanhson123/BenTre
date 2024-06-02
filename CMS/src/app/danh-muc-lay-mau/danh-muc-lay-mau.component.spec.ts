import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucLayMauComponent } from './danh-muc-lay-mau.component';

describe('DanhMucLayMauComponent', () => {
  let component: DanhMucLayMauComponent;
  let fixture: ComponentFixture<DanhMucLayMauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucLayMauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucLayMauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
