import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-setup-interview-schedule-final',
  templateUrl: './setup-interview-schedule-final.component.html',
  styleUrls: ['./setup-interview-schedule-final.component.scss']
})
export class SetupInterviewScheduleFinalComponent implements OnInit {

 
  public scheduleInterviewData: any = {};
  public appliedSuccess = false;
  constructor(private apiService: AppServiceService) { }

  ngOnInit(): void {
  }

  public scheduleInterview() {
    this.apiService.submitFinalInterviewScreening(this.scheduleInterviewData)
    .subscribe((response) => {
        // Sent the mail to vendor if candidate rejected
    })
  }

}
