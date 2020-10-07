import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficTabletListComponent } from './grafic-tablet-list.component';

describe('GraficTabletListComponent', () => {
  let component: GraficTabletListComponent;
  let fixture: ComponentFixture<GraficTabletListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficTabletListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficTabletListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
