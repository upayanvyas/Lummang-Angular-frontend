import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticounterfeitingComponent } from './anticounterfeiting.component';

describe('AnticounterfeitingComponent', () => {
  let component: AnticounterfeitingComponent;
  let fixture: ComponentFixture<AnticounterfeitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnticounterfeitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnticounterfeitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
