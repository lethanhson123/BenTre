import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienBanATTPDetailComponent } from './bien-ban-attpdetail.component';

describe('BienBanATTPDetailComponent', () => {
  let component: BienBanATTPDetailComponent;
  let fixture: ComponentFixture<BienBanATTPDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BienBanATTPDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BienBanATTPDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
