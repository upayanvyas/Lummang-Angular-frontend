import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesliderproductComponent } from './imagesliderproduct.component';

describe('ImagesliderproductComponent', () => {
  let component: ImagesliderproductComponent;
  let fixture: ComponentFixture<ImagesliderproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesliderproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesliderproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
