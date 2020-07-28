import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsCommunicationModalComponent } from './leads-communication-modal.component';

describe('LeadsUpdateModalComponent', () => {
  let component: LeadsCommunicationModalComponent;
  let fixture: ComponentFixture<LeadsCommunicationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsCommunicationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsCommunicationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
