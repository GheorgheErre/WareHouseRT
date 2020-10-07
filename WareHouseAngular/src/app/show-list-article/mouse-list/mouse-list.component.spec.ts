import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseListComponent } from './mouse-list.component';

describe('MouseListComponent', () => {
  let component: MouseListComponent;
  let fixture: ComponentFixture<MouseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
