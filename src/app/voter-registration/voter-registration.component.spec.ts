import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterRegistrationComponent } from './voter-registration.component';

describe('VoterRegistrationComponent', () => {
  let component: VoterRegistrationComponent;
  let fixture: ComponentFixture<VoterRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterRegistrationComponent]
    });
    fixture = TestBed.createComponent(VoterRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
