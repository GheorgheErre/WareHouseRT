import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirErreLabComponent } from './dir-erre-lab.component';

describe('DirErreLabComponent', () => {
  let component: DirErreLabComponent;
  let fixture: ComponentFixture<DirErreLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirErreLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirErreLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
