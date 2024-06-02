import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanThamDinhDetailKiemTraTapChatComponent } from './plan-tham-dinh-detail-kiem-tra-tap-chat.component';

describe('PlanThamDinhDetailKiemTraTapChatComponent', () => {
  let component: PlanThamDinhDetailKiemTraTapChatComponent;
  let fixture: ComponentFixture<PlanThamDinhDetailKiemTraTapChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanThamDinhDetailKiemTraTapChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanThamDinhDetailKiemTraTapChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
