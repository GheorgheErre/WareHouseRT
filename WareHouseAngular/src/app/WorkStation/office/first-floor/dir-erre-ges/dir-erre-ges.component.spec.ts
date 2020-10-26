import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirErreGesComponent } from './dir-erre-ges.component';

describe('DirErreGesComponent', () => {
  let component: DirErreGesComponent;
  let fixture: ComponentFixture<DirErreGesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirErreGesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirErreGesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
