import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCoSoNuoiDocumentsComponent } from './register-co-so-nuoi-documents.component';

describe('RegisterCoSoNuoiDocumentsComponent', () => {
  let component: RegisterCoSoNuoiDocumentsComponent;
  let fixture: ComponentFixture<RegisterCoSoNuoiDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCoSoNuoiDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCoSoNuoiDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
