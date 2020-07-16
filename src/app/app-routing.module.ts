import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SubmitResumeComponent } from './submit-resume/submit-resume.component';
import { ResumeAcceptRejectComponent } from './resume-accept-reject/resume-accept-reject.component';
import { SetupInterviewScheduleComponent } from './setup-interview-schedule/setup-interview-schedule.component';
import { InterviewFeedbackComponent } from './interview-feedback/interview-feedback.component';
import { InterviewDetailsComponent } from './interview-details/interview-details.component';
import { AddJobPostingComponent } from './add-job-posting/add-job-posting.component';
import { SetupInterviewScheduleFinalComponent } from './setup-interview-schedule-final/setup-interview-schedule-final.component';


const routes: Routes = [ 
  { path: '',  redirectTo: 'jobposting', pathMatch: 'full' },
  { path: 'jobposting', component: AddJobPostingComponent },
  { path: 'submitresume', component: SubmitResumeComponent },
  { path: 'resumeacceptreject/:id', component: ResumeAcceptRejectComponent },
  { path: 'setupinterviewschedule/:id"', component: SetupInterviewScheduleComponent },
  { path: 'interviewfeedback/:id', component: InterviewFeedbackComponent },
  { path: 'interview-details-list', component: InterviewDetailsComponent },
  { path: 'setupinterviewschedulefinal/:id', component: SetupInterviewScheduleFinalComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
