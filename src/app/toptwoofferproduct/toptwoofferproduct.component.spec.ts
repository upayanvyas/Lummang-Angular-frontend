import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptwoofferproductComponent } from './toptwoofferproduct.component';

describe('ToptwoofferproductComponent', () => {
  let component: ToptwoofferproductComponent;
  let fixture: ComponentFixture<ToptwoofferproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToptwoofferproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToptwoofferproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
