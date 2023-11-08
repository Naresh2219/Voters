import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module'; // Import your routing module
import { AppComponent } from './app.component';
import { VoterRegistrationComponent } from './voter-registration/voter-registration.component';
import { VoterService } from './voter.service';
import { UpdateVoterComponent } from './update-voter/update-voter.component';
import { VoterListComponent } from './voter-list/voter-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterRegistrationComponent,
    UpdateVoterComponent,
    VoterListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule, 
  ],
  providers: [VoterService],
  bootstrap: [AppComponent],
})
export class AppModule { }
