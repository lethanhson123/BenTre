import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhanAnhDetailComponent } from './phan-anh-detail.component';

describe('PhanAnhDetailComponent', () => {
  let component: PhanAnhDetailComponent;
  let fixture: ComponentFixture<PhanAnhDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhanAnhDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhanAnhDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
