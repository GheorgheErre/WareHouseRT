import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uff2Component } from './uff2.component';

describe('Uff2Component', () => {
  let component: Uff2Component;
  let fixture: ComponentFixture<Uff2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uff2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Uff2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
