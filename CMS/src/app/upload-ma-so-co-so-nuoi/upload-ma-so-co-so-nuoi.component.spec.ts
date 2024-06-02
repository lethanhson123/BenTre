import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMaSoCoSoNuoiComponent } from './upload-ma-so-co-so-nuoi.component';

describe('UploadMaSoCoSoNuoiComponent', () => {
  let component: UploadMaSoCoSoNuoiComponent;
  let fixture: ComponentFixture<UploadMaSoCoSoNuoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadMaSoCoSoNuoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMaSoCoSoNuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
