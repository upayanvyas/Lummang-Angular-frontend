import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsofthedayproductComponent } from './dealsofthedayproduct.component';

describe('DealsofthedayproductComponent', () => {
  let component: DealsofthedayproductComponent;
  let fixture: ComponentFixture<DealsofthedayproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealsofthedayproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsofthedayproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
