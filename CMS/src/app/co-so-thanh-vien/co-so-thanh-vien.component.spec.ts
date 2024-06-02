import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoThanhVienComponent } from './co-so-thanh-vien.component';

describe('CoSoThanhVienComponent', () => {
  let component: CoSoThanhVienComponent;
  let fixture: ComponentFixture<CoSoThanhVienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoThanhVienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoThanhVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
