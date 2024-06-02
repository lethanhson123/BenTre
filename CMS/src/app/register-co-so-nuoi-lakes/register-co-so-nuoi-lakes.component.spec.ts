import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCoSoNuoiLakesComponent } from './register-co-so-nuoi-lakes.component';

describe('RegisterCoSoNuoiLakesComponent', () => {
  let component: RegisterCoSoNuoiLakesComponent;
  let fixture: ComponentFixture<RegisterCoSoNuoiLakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCoSoNuoiLakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCoSoNuoiLakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
