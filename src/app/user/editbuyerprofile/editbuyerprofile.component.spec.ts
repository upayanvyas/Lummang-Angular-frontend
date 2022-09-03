import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbuyerprofileComponent } from './editbuyerprofile.component';

describe('EditbuyerprofileComponent', () => {
  let component: EditbuyerprofileComponent;
  let fixture: ComponentFixture<EditbuyerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbuyerprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbuyerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
