import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBollaComponent } from './form-bolla.component';

describe('FormBollaComponent', () => {
  let component: FormBollaComponent;
  let fixture: ComponentFixture<FormBollaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBollaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBollaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
