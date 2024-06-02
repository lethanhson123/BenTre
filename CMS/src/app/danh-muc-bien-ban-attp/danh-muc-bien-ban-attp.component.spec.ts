import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucBienBanATTPComponent } from './danh-muc-bien-ban-attp.component';

describe('DanhMucBienBanATTPComponent', () => {
  let component: DanhMucBienBanATTPComponent;
  let fixture: ComponentFixture<DanhMucBienBanATTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucBienBanATTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucBienBanATTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
