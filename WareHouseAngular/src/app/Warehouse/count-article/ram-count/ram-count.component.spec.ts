import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamCountComponent } from './ram-count.component';

describe('RamCountComponent', () => {
  let component: RamCountComponent;
  let fixture: ComponentFixture<RamCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
