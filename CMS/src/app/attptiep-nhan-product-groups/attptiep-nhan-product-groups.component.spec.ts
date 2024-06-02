import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATTPTiepNhanProductGroupsComponent } from './attptiep-nhan-product-groups.component';

describe('ATTPTiepNhanProductGroupsComponent', () => {
  let component: ATTPTiepNhanProductGroupsComponent;
  let fixture: ComponentFixture<ATTPTiepNhanProductGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATTPTiepNhanProductGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATTPTiepNhanProductGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
