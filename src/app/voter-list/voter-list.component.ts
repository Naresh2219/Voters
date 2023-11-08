import { Component, OnInit } from '@angular/core';
import { VoterService } from '../voter.service';
import { Voter } from '../voter.model';
import { Router } from '@angular/router'; // Import the Router for navigation

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.css']
})
export class VoterListComponent implements OnInit {
  voters: Voter[] = [];

  constructor(private voterService: VoterService, private router: Router) {}

  ngOnInit() {
    this.getVoters();
  }

  getVoters() {
    this.voterService.getVoters().subscribe((voters) => {
      this.voters = voters;
    });
  }

  viewVoterDetails(voter: Voter) {
    
    this.router.navigate(['/voter-list', voter.voterId]);
  }

  updatevoter(voter: Voter) {
    
    this.router.navigate(['/update-voter', voter.voterId]);
  }

  deleteVoter(voter: Voter) {
  
    this.voterService.deleteVoter(voter.voterId).subscribe(() => {
    
      this.voters = this.voters.filter((v) => v.voterId !== voter.voterId);
    });
  }
}
