import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoDocumentTemplateComponent } from './co-so-document-template.component';

describe('CoSoDocumentTemplateComponent', () => {
  let component: CoSoDocumentTemplateComponent;
  let fixture: ComponentFixture<CoSoDocumentTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoSoDocumentTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoDocumentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
