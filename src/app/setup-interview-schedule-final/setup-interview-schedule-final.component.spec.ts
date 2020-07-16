import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupInterviewScheduleFinalComponent } from './setup-interview-schedule-final.component';

describe('SetupInterviewScheduleFinalComponent', () => {
  let component: SetupInterviewScheduleFinalComponent;
  let fixture: ComponentFixture<SetupInterviewScheduleFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupInterviewScheduleFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupInterviewScheduleFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
