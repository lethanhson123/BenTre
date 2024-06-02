import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhanAnhComponent } from './phan-anh.component';

describe('PhanAnhComponent', () => {
  let component: PhanAnhComponent;
  let fixture: ComponentFixture<PhanAnhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhanAnhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhanAnhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
