import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoNuoiDocumentComponent } from './co-so-nuoi-document.component';

describe('CoSoNuoiDocumentComponent', () => {
  let component: CoSoNuoiDocumentComponent;
  let fixture: ComponentFixture<CoSoNuoiDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoNuoiDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoNuoiDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
