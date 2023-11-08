import { Component, OnInit } from '@angular/core';
import { VoterService } from '../voter.service';
import { Voter } from '../voter.model';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  voters: any[] = [];
  newVoter: any = {};

  constructor(private voterService: VoterService) { }

  ngOnInit() {
    this.loadVoters();
  }

  loadVoters() {

    this.voterService.getVoters().subscribe((data: any) => {
      this.voters = data;
    });
  }

  createNewVoter() {
    this.voterService.createVoter(this.newVoter).subscribe(() => {
      this.loadVoters();
      this.newVoter = {};
    });
  }

  updateVoter(voterId: number, updatedData: Voter) {
    this.voterService.updateVoter(voterId, updatedData).subscribe(() => {
      this.loadVoters();
    });
  }

  deleteVoter(voterId: number) {
    this.voterService.deleteVoter(voterId).subscribe(() => {
      this.loadVoters();
    });
  }
}
