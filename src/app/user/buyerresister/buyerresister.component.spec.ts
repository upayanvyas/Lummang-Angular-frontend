import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerresisterComponent } from './buyerresister.component';

describe('BuyerresisterComponent', () => {
  let component: BuyerresisterComponent;
  let fixture: ComponentFixture<BuyerresisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerresisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerresisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
