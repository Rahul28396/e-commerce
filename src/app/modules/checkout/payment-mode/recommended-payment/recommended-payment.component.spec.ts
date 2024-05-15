import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedPaymentComponent } from './recommended-payment.component';

describe('RecommendedPaymentComponent', () => {
  let component: RecommendedPaymentComponent;
  let fixture: ComponentFixture<RecommendedPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendedPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
