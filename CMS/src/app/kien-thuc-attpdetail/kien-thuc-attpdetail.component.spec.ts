import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KienThucATTPDetailComponent } from './kien-thuc-attpdetail.component';

describe('KienThucATTPDetailComponent', () => {
  let component: KienThucATTPDetailComponent;
  let fixture: ComponentFixture<KienThucATTPDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KienThucATTPDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KienThucATTPDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
