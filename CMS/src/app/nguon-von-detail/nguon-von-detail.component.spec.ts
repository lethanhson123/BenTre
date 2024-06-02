import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguonVonDetailComponent } from './nguon-von-detail.component';

describe('NguonVonDetailComponent', () => {
  let component: NguonVonDetailComponent;
  let fixture: ComponentFixture<NguonVonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguonVonDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguonVonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
