import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoATTPInfoDetailComponent } from './co-so-attpinfo-detail.component';

describe('CoSoATTPInfoDetailComponent', () => {
  let component: CoSoATTPInfoDetailComponent;
  let fixture: ComponentFixture<CoSoATTPInfoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoATTPInfoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoATTPInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
