import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATTPInfoProductGroupsComponent } from './attpinfo-product-groups.component';

describe('ATTPInfoProductGroupsComponent', () => {
  let component: ATTPInfoProductGroupsComponent;
  let fixture: ComponentFixture<ATTPInfoProductGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATTPInfoProductGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATTPInfoProductGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
