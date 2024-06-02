import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoQuyTrinhCapGiayChungNhanATTPComponent } from './co-so-quy-trinh-cap-giay-chung-nhan-attp.component';

describe('CoSoQuyTrinhCapGiayChungNhanATTPComponent', () => {
  let component: CoSoQuyTrinhCapGiayChungNhanATTPComponent;
  let fixture: ComponentFixture<CoSoQuyTrinhCapGiayChungNhanATTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoQuyTrinhCapGiayChungNhanATTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoQuyTrinhCapGiayChungNhanATTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
