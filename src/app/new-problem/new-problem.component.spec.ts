import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProblemComponent } from './new-problem.component';

describe('NewProblemComponent', () => {
  let component: NewProblemComponent;
  let fixture: ComponentFixture<NewProblemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProblemComponent]
    });
    fixture = TestBed.createComponent(NewProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
