import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhKiemTraTapChatComponent } from './plan-tham-dinh-kiem-tra-tap-chat.component';

describe('PlanThamDinhKiemTraTapChatComponent', () => {
  let component: PlanThamDinhKiemTraTapChatComponent;
  let fixture: ComponentFixture<PlanThamDinhKiemTraTapChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhKiemTraTapChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhKiemTraTapChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
