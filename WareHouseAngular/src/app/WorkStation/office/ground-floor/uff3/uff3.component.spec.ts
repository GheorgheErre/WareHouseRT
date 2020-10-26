import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uff3Component } from './uff3.component';

describe('Uff3Component', () => {
  let component: Uff3Component;
  let fixture: ComponentFixture<Uff3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uff3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Uff3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
