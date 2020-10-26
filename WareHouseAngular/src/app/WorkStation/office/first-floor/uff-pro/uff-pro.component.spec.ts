import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UffProComponent } from './uff-pro.component';

describe('UffProComponent', () => {
  let component: UffProComponent;
  let fixture: ComponentFixture<UffProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UffProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UffProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
