import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucProductGroupComponent } from './danh-muc-product-group.component';

describe('DanhMucProductGroupComponent', () => {
  let component: DanhMucProductGroupComponent;
  let fixture: ComponentFixture<DanhMucProductGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucProductGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucProductGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
