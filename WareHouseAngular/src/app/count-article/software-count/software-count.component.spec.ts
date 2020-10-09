import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareCountComponent } from './software-count.component';

describe('SoftwareCountComponent', () => {
  let component: SoftwareCountComponent;
  let fixture: ComponentFixture<SoftwareCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
