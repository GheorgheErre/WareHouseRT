import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BollaComponent } from './bolla.component';

describe('BollaComponent', () => {
  let component: BollaComponent;
  let fixture: ComponentFixture<BollaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BollaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BollaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
