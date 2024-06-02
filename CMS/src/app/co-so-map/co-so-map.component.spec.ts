import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoMapComponent } from './co-so-map.component';

describe('CoSoMapComponent', () => {
  let component: CoSoMapComponent;
  let fixture: ComponentFixture<CoSoMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
