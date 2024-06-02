import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoCauHoiATTPComponent } from './co-so-cau-hoi-attp.component';

describe('CoSoCauHoiATTPComponent', () => {
  let component: CoSoCauHoiATTPComponent;
  let fixture: ComponentFixture<CoSoCauHoiATTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoCauHoiATTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoCauHoiATTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
