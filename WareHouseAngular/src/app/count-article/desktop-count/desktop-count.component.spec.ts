import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopCountComponent } from './desktop-count.component';

describe('DesktopCountComponent', () => {
  let component: DesktopCountComponent;
  let fixture: ComponentFixture<DesktopCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
