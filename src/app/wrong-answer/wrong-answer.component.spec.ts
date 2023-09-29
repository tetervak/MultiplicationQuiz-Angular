import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongAnswerComponent } from './wrong-answer.component';

describe('WrongAnswerComponent', () => {
  let component: WrongAnswerComponent;
  let fixture: ComponentFixture<WrongAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrongAnswerComponent]
    });
    fixture = TestBed.createComponent(WrongAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
