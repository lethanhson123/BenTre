import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KienThucATTPComponent } from './kien-thuc-attp.component';

describe('KienThucATTPComponent', () => {
  let component: KienThucATTPComponent;
  let fixture: ComponentFixture<KienThucATTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KienThucATTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KienThucATTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
