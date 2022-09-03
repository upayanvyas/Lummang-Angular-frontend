import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistingpolicyComponent } from './productlistingpolicy.component';

describe('ProductlistingpolicyComponent', () => {
  let component: ProductlistingpolicyComponent;
  let fixture: ComponentFixture<ProductlistingpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlistingpolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistingpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
