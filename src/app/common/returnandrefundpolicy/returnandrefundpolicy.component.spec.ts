import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnandrefundpolicyComponent } from './returnandrefundpolicy.component';

describe('ReturnandrefundpolicyComponent', () => {
  let component: ReturnandrefundpolicyComponent;
  let fixture: ComponentFixture<ReturnandrefundpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnandrefundpolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnandrefundpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
