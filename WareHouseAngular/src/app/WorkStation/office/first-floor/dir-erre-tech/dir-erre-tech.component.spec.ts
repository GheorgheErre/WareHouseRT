import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirErreTechComponent } from './dir-erre-tech.component';

describe('DirErreTechComponent', () => {
  let component: DirErreTechComponent;
  let fixture: ComponentFixture<DirErreTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirErreTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirErreTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
