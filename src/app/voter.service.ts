import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voter } from './voter.model';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) {}

  getVoters(): Observable<Voter[]> {
    return this.http.get<Voter[]>('http://localhost:8083/api/voters');
  }

  createVoter(voter: Voter): Observable<Voter> {
    return this.http.post<Voter>('http://localhost:8083/api/voters', voter);
  }

  updateVoter(id: number, voter: Voter): Observable<Voter> {
    return this.http.put<Voter>(`http://localhost:8083/api/voters/${id}`, voter);
  }

  deleteVoter(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8083/api/voters/${id}`);
  }
}
