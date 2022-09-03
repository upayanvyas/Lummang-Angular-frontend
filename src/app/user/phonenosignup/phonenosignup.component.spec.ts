import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonenosignupComponent } from './phonenosignup.component';

describe('PhonenosignupComponent', () => {
  let component: PhonenosignupComponent;
  let fixture: ComponentFixture<PhonenosignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonenosignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonenosignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
