import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-submit-resume',
  templateUrl: './submit-resume.component.html',
  styleUrls: ['./submit-resume.component.scss']
})
export class SubmitResumeComponent implements OnInit {

  public submitResumeData: any = {};
  public allJobPosting = [];
  public appliedSuccess = false;
  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.appService.getAllJobPosting()
    .subscribe((response: any) => {
      this.allJobPosting = response;
    })
  }

  submitResume() {
    this.appService.submitResumeData(this.submitResumeData)
    .subscribe((response) => {
      this.submitResumeData = {};
      this.appliedSuccess = true;
    })
  }

}
