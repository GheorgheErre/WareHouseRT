import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenCountComponent } from './token-count.component';

describe('TokenCountComponent', () => {
  let component: TokenCountComponent;
  let fixture: ComponentFixture<TokenCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
