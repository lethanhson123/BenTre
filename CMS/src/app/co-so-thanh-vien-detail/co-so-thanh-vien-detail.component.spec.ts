import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoThanhVienDetailComponent } from './co-so-thanh-vien-detail.component';

describe('CoSoThanhVienDetailComponent', () => {
  let component: CoSoThanhVienDetailComponent;
  let fixture: ComponentFixture<CoSoThanhVienDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoThanhVienDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoThanhVienDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
