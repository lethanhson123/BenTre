import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaoTrinhATTPComponent } from './giao-trinh-attp.component';

describe('GiaoTrinhATTPComponent', () => {
  let component: GiaoTrinhATTPComponent;
  let fixture: ComponentFixture<GiaoTrinhATTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiaoTrinhATTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaoTrinhATTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
