import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardCountComponent } from './keyboard-count.component';

describe('KeyboardCountComponent', () => {
  let component: KeyboardCountComponent;
  let fixture: ComponentFixture<KeyboardCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyboardCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
