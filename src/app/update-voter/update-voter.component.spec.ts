import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVoterComponent } from './update-voter.component';

describe('UpdateVoterComponent', () => {
  let component: UpdateVoterComponent;
  let fixture: ComponentFixture<UpdateVoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateVoterComponent]
    });
    fixture = TestBed.createComponent(UpdateVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
