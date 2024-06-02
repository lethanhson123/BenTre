import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemSoatThuHoachComponent } from './kiem-soat-thu-hoach.component';

describe('KiemSoatThuHoachComponent', () => {
  let component: KiemSoatThuHoachComponent;
  let fixture: ComponentFixture<KiemSoatThuHoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiemSoatThuHoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KiemSoatThuHoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
