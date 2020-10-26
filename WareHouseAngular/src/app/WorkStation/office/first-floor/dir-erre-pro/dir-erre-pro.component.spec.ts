import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirErreProComponent } from './dir-erre-pro.component';

describe('DirErreProComponent', () => {
  let component: DirErreProComponent;
  let fixture: ComponentFixture<DirErreProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirErreProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirErreProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
