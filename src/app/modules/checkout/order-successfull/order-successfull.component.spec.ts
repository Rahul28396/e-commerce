import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSuccessfullComponent } from './order-successfull.component';

describe('OrderSuccessfullComponent', () => {
  let component: OrderSuccessfullComponent;
  let fixture: ComponentFixture<OrderSuccessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderSuccessfullComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderSuccessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
