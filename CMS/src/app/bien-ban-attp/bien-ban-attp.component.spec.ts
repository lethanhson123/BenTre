import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienBanATTPComponent } from './bien-ban-attp.component';

describe('BienBanATTPComponent', () => {
  let component: BienBanATTPComponent;
  let fixture: ComponentFixture<BienBanATTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BienBanATTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BienBanATTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
