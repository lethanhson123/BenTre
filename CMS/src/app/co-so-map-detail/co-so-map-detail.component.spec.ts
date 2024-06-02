import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoMapDetailComponent } from './co-so-map-detail.component';

describe('CoSoMapDetailComponent', () => {
  let component: CoSoMapDetailComponent;
  let fixture: ComponentFixture<CoSoMapDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoMapDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoMapDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
