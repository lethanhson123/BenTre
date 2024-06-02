import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATTPInfoDetailByIDComponent } from './attpinfo-detail-by-id.component';

describe('ATTPInfoDetailByIDComponent', () => {
  let component: ATTPInfoDetailByIDComponent;
  let fixture: ComponentFixture<ATTPInfoDetailByIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATTPInfoDetailByIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATTPInfoDetailByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
