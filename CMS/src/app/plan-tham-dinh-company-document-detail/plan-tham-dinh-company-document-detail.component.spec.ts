import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhCompanyDocumentDetailComponent } from './plan-tham-dinh-company-document-detail.component';

describe('PlanThamDinhCompanyDocumentDetailComponent', () => {
  let component: PlanThamDinhCompanyDocumentDetailComponent;
  let fixture: ComponentFixture<PlanThamDinhCompanyDocumentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhCompanyDocumentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhCompanyDocumentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
