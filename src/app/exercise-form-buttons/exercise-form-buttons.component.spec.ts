import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFormButtonsComponent } from './exercise-form-buttons.component';

describe('ExerciseFormButtonsComponent', () => {
  let component: ExerciseFormButtonsComponent;
  let fixture: ComponentFixture<ExerciseFormButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseFormButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseFormButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
