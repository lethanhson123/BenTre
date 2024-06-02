import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCoSoNuoiComponent } from './register-co-so-nuoi.component';

describe('RegisterCoSoNuoiComponent', () => {
  let component: RegisterCoSoNuoiComponent;
  let fixture: ComponentFixture<RegisterCoSoNuoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCoSoNuoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCoSoNuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
