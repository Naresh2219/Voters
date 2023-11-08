import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoterRegistrationComponent } from './voter-registration/voter-registration.component';
import { UpdateVoterComponent } from './update-voter/update-voter.component';
import { VoterListComponent } from './voter-list/voter-list.component';
import { VoterComponent } from './voter/voter.component';
import { VoterService } from './voter.service';

const routes: Routes = [
  { path: 'register', component: VoterRegistrationComponent },
 { path: 'voterdata', component: VoterComponent },
  { path: 'update-voter/:voterId', component: UpdateVoterComponent },
  { path: 'voter-list', component: VoterListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
