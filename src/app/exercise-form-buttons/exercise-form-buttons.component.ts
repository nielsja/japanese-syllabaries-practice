import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-form-buttons',
  templateUrl: './exercise-form-buttons.component.html',
  styleUrls: ['./exercise-form-buttons.component.scss']
})
export class ExerciseFormButtonsComponent implements OnInit {
  testText = 'starting test text!'
  answerText = 'starting answer text!'
  isAnswerTextVisible = false;
  characterSetSelected = ''
  characterSets: string[] = ['hiragana', 'katakana'];
  constructor() { }

  ngOnInit(): void {
  }

  generateExercise(): void {
    this.testText = 'Generate Exercise Button submitted!'
  }
  revealAnswer(): void {
    this.isAnswerTextVisible = true;
  }
  resetExercises(): void {
    this.answerText = 'Reset answer text!';
    this.isAnswerTextVisible = false;
    this.testText = 'Reset test text!'
  }
  setCharacterSet(characterSet: string): void {
    // console.log(JSON.stringify(event, null, 2))
    this.characterSetSelected = characterSet;
  }
}
