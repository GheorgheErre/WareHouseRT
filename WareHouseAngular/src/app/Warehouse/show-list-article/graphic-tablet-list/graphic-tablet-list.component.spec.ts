import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicTabletListComponent } from './graphic-tablet-list.component';

describe('GraficTabletListComponent', () => {
  let component: GraphicTabletListComponent;
  let fixture: ComponentFixture<GraphicTabletListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicTabletListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicTabletListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
