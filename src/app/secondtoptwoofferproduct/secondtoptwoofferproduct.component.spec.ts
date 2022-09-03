import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondtoptwoofferproductComponent } from './secondtoptwoofferproduct.component';

describe('SecondtoptwoofferproductComponent', () => {
  let component: SecondtoptwoofferproductComponent;
  let fixture: ComponentFixture<SecondtoptwoofferproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondtoptwoofferproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondtoptwoofferproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
