import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupInterviewScheduleComponent } from './setup-interview-schedule.component';

describe('SetupInterviewScheduleComponent', () => {
  let component: SetupInterviewScheduleComponent;
  let fixture: ComponentFixture<SetupInterviewScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupInterviewScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupInterviewScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
