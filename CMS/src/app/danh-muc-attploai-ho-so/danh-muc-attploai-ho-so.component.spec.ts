import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucATTPLoaiHoSoComponent } from './danh-muc-attploai-ho-so.component';

describe('DanhMucATTPLoaiHoSoComponent', () => {
  let component: DanhMucATTPLoaiHoSoComponent;
  let fixture: ComponentFixture<DanhMucATTPLoaiHoSoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucATTPLoaiHoSoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucATTPLoaiHoSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
