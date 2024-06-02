import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyScopeComponent } from './company-scope.component';

describe('CompanyScopeComponent', () => {
  let component: CompanyScopeComponent;
  let fixture: ComponentFixture<CompanyScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyScopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
