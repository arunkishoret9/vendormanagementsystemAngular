import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.scss']
})
export class InterviewDetailsComponent implements OnInit {

  public candidateDetails: any = {};
  public appliedSuccess = false;
  constructor(private apiService: AppServiceService) { }

  ngOnInit(): void {
    this.apiService.getAllCandidateDetails()
      .subscribe((response) => {
        this.candidateDetails  = response;
      })
  }

 

}
