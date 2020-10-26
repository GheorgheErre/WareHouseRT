import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Direzione1Component } from './direzione1.component';

describe('Direzione1Component', () => {
  let component: Direzione1Component;
  let fixture: ComponentFixture<Direzione1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Direzione1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Direzione1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
