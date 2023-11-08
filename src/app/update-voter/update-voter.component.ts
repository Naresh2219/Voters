import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoterService } from '../voter.service';
import { Voter } from '../voter.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-voter',
  templateUrl: './update-voter.component.html',
  styleUrls: ['./update-voter.component.css']
})
export class UpdateVoterComponent implements OnInit {
  updateForm!: FormGroup;
  voterId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private voterService: VoterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.voterId = +params['voterId']; 
    });

    this.updateForm = this.formBuilder.group({
      voterParty: ['', Validators.required],
      voterArea: ['', Validators.required],
    });
  }

  onUpdate() {
  if (this.updateForm.valid && this.voterId) {
    const voterPartyControl = this.updateForm.get('voterParty');
    const voterAreaControl = this.updateForm.get('voterArea');

    if (voterPartyControl && voterAreaControl) {
      const updatedData: Voter = {
        voterId: this.voterId,
        voterParty: voterPartyControl.value,
        voterArea: voterAreaControl.value,
      };

      this.voterService.updateVoter(this.voterId, updatedData).subscribe(
        (updatedVoter) => {
          console.log('Voter updated successfully:', updatedVoter);
        },
        (error) => {
          console.error('Error updating voter:', error);
        }
      );
    }
  }
}
}