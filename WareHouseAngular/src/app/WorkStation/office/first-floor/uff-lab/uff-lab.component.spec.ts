import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UffLabComponent } from './uff-lab.component';

describe('UffLabComponent', () => {
  let component: UffLabComponent;
  let fixture: ComponentFixture<UffLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UffLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UffLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
