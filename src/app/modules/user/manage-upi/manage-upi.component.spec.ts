import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUpiComponent } from './manage-upi.component';

describe('ManageUpiComponent', () => {
  let component: ManageUpiComponent;
  let fixture: ComponentFixture<ManageUpiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageUpiComponent]
    });
    fixture = TestBed.createComponent(ManageUpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
