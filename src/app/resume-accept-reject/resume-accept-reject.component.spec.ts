import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAcceptRejectComponent } from './resume-accept-reject.component';

describe('ResumeAcceptRejectComponent', () => {
  let component: ResumeAcceptRejectComponent;
  let fixture: ComponentFixture<ResumeAcceptRejectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeAcceptRejectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAcceptRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
