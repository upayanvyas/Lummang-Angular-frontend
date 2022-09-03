import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazortestComponent } from './razortest.component';

describe('RazortestComponent', () => {
  let component: RazortestComponent;
  let fixture: ComponentFixture<RazortestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazortestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RazortestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
