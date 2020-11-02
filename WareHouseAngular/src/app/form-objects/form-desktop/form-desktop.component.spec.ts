import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDesktopComponent } from './form-desktop.component';

describe('FormDesktopComponent', () => {
  let component: FormDesktopComponent;
  let fixture: ComponentFixture<FormDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
