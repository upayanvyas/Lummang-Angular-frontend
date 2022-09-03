import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewarrivalproductsComponent } from './newarrivalproducts.component';

describe('NewarrivalproductsComponent', () => {
  let component: NewarrivalproductsComponent;
  let fixture: ComponentFixture<NewarrivalproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewarrivalproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewarrivalproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
