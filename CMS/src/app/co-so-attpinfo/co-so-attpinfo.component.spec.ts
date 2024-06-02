import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoATTPInfoComponent } from './co-so-attpinfo.component';

describe('CoSoATTPInfoComponent', () => {
  let component: CoSoATTPInfoComponent;
  let fixture: ComponentFixture<CoSoATTPInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoATTPInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoATTPInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
