import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicTabletCountComponent } from './graphic-tablet-count.component';

describe('GraphicTabletCountComponent', () => {
  let component: GraphicTabletCountComponent;
  let fixture: ComponentFixture<GraphicTabletCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicTabletCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicTabletCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
