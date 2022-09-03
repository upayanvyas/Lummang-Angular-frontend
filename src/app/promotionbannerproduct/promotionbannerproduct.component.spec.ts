import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionbannerproductComponent } from './promotionbannerproduct.component';

describe('PromotionbannerproductComponent', () => {
  let component: PromotionbannerproductComponent;
  let fixture: ComponentFixture<PromotionbannerproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionbannerproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionbannerproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
