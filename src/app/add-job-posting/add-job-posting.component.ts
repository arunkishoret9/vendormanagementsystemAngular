import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-add-job-posting',
  templateUrl: './add-job-posting.component.html',
  styleUrls: ['./add-job-posting.component.scss']
})
export class AddJobPostingComponent implements OnInit {

  public appliedSuccess = false;
  ngOnInit(): void {
  }

  public jobPostingData: any = {
    'jobTitle': 'Software Dev'
  };
  constructor(private appService: AppServiceService) {

  }

  createJobPosting() {
    this.appService.createJobPosting(this.jobPostingData)
      .subscribe((response) => {
        this.jobPostingData = {};
        this.appliedSuccess = true;
      })
  }

}
