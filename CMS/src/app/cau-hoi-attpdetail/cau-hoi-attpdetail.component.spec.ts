import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauHoiATTPDetailComponent } from './cau-hoi-attpdetail.component';

describe('CauHoiATTPDetailComponent', () => {
  let component: CauHoiATTPDetailComponent;
  let fixture: ComponentFixture<CauHoiATTPDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CauHoiATTPDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CauHoiATTPDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
