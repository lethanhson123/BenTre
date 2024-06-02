import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoATTPInfoViewComponent } from './co-so-attpinfo-view.component';

describe('CoSoATTPInfoViewComponent', () => {
  let component: CoSoATTPInfoViewComponent;
  let fixture: ComponentFixture<CoSoATTPInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoATTPInfoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoATTPInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
