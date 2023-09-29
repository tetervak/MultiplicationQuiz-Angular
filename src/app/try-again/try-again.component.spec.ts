import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryAgainComponent } from './try-again.component';

describe('TryAgainComponent', () => {
  let component: TryAgainComponent;
  let fixture: ComponentFixture<TryAgainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TryAgainComponent]
    });
    fixture = TestBed.createComponent(TryAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
