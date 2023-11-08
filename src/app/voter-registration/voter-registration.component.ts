import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoterService } from '../voter.service';

@Component({
  selector: 'app-voter-registration',
  templateUrl: './voter-registration.component.html',
  styleUrls: ['./voter-registration.component.css']
})
export class VoterRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  registrationSuccessful: boolean = false; // Add this property

  constructor(private formBuilder: FormBuilder, private voterService: VoterService) {
    this.registrationForm = this.formBuilder.group({
      voterParty: ['', [Validators.required]],
      voterArea: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const voterData = this.registrationForm.value;
      this.voterService.createVoter(voterData).subscribe(
        (response: any) => {
          console.log('Voter registration successful:', response);
          this.registrationSuccessful = true;
        },
        (error: any) => {
          console.error('Voter registration error:', error);
        }
      );
    }
  }
}
