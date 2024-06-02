import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauHoiATTPComponent } from './cau-hoi-attp.component';

describe('CauHoiATTPComponent', () => {
  let component: CauHoiATTPComponent;
  let fixture: ComponentFixture<CauHoiATTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CauHoiATTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CauHoiATTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
