import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATTPTiepNhanDocumentsComponent } from './attptiep-nhan-documents.component';

describe('ATTPTiepNhanDocumentsComponent', () => {
  let component: ATTPTiepNhanDocumentsComponent;
  let fixture: ComponentFixture<ATTPTiepNhanDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATTPTiepNhanDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATTPTiepNhanDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
