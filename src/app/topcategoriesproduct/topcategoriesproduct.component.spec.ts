import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcategoriesproductComponent } from './topcategoriesproduct.component';

describe('TopcategoriesproductComponent', () => {
  let component: TopcategoriesproductComponent;
  let fixture: ComponentFixture<TopcategoriesproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopcategoriesproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopcategoriesproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
