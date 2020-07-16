import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  createJobPosting(data) {

    return this.httpClient.post(`${this.baseUrl}api/jobpostings`, data)

  }

  getAllJobPosting() {
    return this.httpClient.get(`${this.baseUrl}api/jobpostings`)

  }

  submitResumeData(data) {
    
    return this.httpClient.post(`${this.baseUrl}api/submitresume`, data)

  }

  acceptResume(candidateDetails) {
    return this.httpClient.post(`${this.baseUrl}api/acceptresume`, candidateDetails)
  }

  rejectResume(candidateDetails) {
    return this.httpClient.post(`${this.baseUrl}api/rejectresume`, candidateDetails)
  }

  getCandidateDetails(candidateId) {
    
    return this.httpClient.get(`${this.baseUrl}api/getcandidatedetails?candidateId=${candidateId}`)
  }

  getAllCandidateDetails() {
    return this.httpClient.get(`${this.baseUrl}api/getallcandidatedetails`)
  }

  submitinitialInterviewScreening(feedback) {
    return this.httpClient.post(`${this.baseUrl}api/initialInterviewScreening`, feedback)
  }

  submitFinalInterviewScreening(feedback) {
    return this.httpClient.post(`${this.baseUrl}api/finalInterviewScreening`, feedback)
  }
}
