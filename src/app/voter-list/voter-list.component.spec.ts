import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterListComponent } from './voter-list.component';

describe('VoterListComponent', () => {
  let component: VoterListComponent;
  let fixture: ComponentFixture<VoterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterListComponent]
    });
    fixture = TestBed.createComponent(VoterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
