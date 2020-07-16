import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SubmitResumeComponent } from './submit-resume/submit-resume.component';
import { AddJobPostingComponent } from './add-job-posting/add-job-posting.component';
import { ResumeAcceptRejectComponent } from './resume-accept-reject/resume-accept-reject.component';
import { SetupInterviewScheduleComponent } from './setup-interview-schedule/setup-interview-schedule.component';
import { InterviewFeedbackComponent } from './interview-feedback/interview-feedback.component';
import { InterviewDetailsComponent } from './interview-details/interview-details.component';
import { SetupInterviewScheduleFinalComponent } from './setup-interview-schedule-final/setup-interview-schedule-final.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitResumeComponent,
    AddJobPostingComponent,
    ResumeAcceptRejectComponent,
    SetupInterviewScheduleComponent,
    InterviewFeedbackComponent,
    InterviewDetailsComponent,
    SetupInterviewScheduleFinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
