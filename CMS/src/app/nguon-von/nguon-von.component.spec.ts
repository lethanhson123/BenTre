import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguonVonComponent } from './nguon-von.component';

describe('NguonVonComponent', () => {
  let component: NguonVonComponent;
  let fixture: ComponentFixture<NguonVonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguonVonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguonVonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
