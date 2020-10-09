import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HddCountComponent } from './hdd-count.component';

describe('HddCountComponent', () => {
  let component: HddCountComponent;
  let fixture: ComponentFixture<HddCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HddCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HddCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
