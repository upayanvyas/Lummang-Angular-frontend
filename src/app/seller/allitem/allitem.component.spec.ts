import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllitemComponent } from './allitem.component';

describe('AllitemComponent', () => {
  let component: AllitemComponent;
  let fixture: ComponentFixture<AllitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
