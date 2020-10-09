import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicTableCountComponent } from './graphic-table-count.component';

describe('GraphicTableCountComponent', () => {
  let component: GraphicTableCountComponent;
  let fixture: ComponentFixture<GraphicTableCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicTableCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicTableCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
