import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Direzione2Component } from './direzione2.component';

describe('Direzione2Component', () => {
  let component: Direzione2Component;
  let fixture: ComponentFixture<Direzione2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Direzione2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Direzione2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
