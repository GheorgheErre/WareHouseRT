import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsdListComponent } from './ssd-list.component';

describe('SsdListComponent', () => {
  let component: SsdListComponent;
  let fixture: ComponentFixture<SsdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsdListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
