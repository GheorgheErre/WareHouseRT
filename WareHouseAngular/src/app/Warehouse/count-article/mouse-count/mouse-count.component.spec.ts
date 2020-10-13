import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseCountComponent } from './mouse-count.component';

describe('MouseCOuntComponent', () => {
  let component: MouseCountComponent;
  let fixture: ComponentFixture<MouseCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
