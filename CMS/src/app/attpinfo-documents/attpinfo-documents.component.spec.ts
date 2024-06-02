import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATTPInfoDocumentsComponent } from './attpinfo-documents.component';

describe('ATTPInfoDocumentsComponent', () => {
  let component: ATTPInfoDocumentsComponent;
  let fixture: ComponentFixture<ATTPInfoDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATTPInfoDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATTPInfoDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
