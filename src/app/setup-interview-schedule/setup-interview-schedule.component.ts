import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-setup-interview-schedule',
  templateUrl: './setup-interview-schedule.component.html',
  styleUrls: ['./setup-interview-schedule.component.scss']
})
export class SetupInterviewScheduleComponent implements OnInit {

  public scheduleInterviewData: any = {};
  public appliedSuccess = false;
  constructor(private apiService: AppServiceService) { }

  ngOnInit(): void {
  }

  public scheduleInterview() {
    this.apiService.submitinitialInterviewScreening(this.scheduleInterviewData)
    .subscribe((response) => {
        // Sent the mail to vendor if candidate rejected
    })
  }
}
