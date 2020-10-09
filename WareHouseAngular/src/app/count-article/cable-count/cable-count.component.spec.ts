import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CableCountComponent } from './cable-count.component';

describe('CableCountComponent', () => {
  let component: CableCountComponent;
  let fixture: ComponentFixture<CableCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CableCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CableCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
