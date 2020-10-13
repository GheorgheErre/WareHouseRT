import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsdCountComponent } from './ssd-count.component';

describe('SsdCountComponent', () => {
  let component: SsdCountComponent;
  let fixture: ComponentFixture<SsdCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsdCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsdCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
