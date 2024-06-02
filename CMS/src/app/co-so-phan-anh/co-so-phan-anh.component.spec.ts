import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoPhanAnhComponent } from './co-so-phan-anh.component';

describe('CoSoPhanAnhComponent', () => {
  let component: CoSoPhanAnhComponent;
  let fixture: ComponentFixture<CoSoPhanAnhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoPhanAnhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoPhanAnhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
