import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume-accept-reject',
  templateUrl: './resume-accept-reject.component.html',
  styleUrls: ['./resume-accept-reject.component.scss']
})
export class ResumeAcceptRejectComponent implements OnInit {

  public candidateDetals: any = {};
  constructor(private appService: AppServiceService,
    private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id'); 
    this.appService.getCandidateDetails(id)
    .subscribe((response: any) => {
      this.candidateDetals = response;
    })
  }

  acceptResume() {
    // Send the mail to Vendor 
   
    this.appService.acceptResume(this.candidateDetals)
      .subscribe((response) => {
        
      })
  }

  rejectResume() {
    //send the mail to Vendor for it 
   
    this.appService.rejectResume(this.candidateDetals)
      .subscribe((response) => {
        
      })
  }

}
