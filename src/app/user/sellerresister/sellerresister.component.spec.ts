import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerresisterComponent } from './sellerresister.component';

describe('SellerresisterComponent', () => {
  let component: SellerresisterComponent;
  let fixture: ComponentFixture<SellerresisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerresisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerresisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
