import { Component } from '@angular/core';
import { QuestionService } from '../../core/services/question.service';
import { DeckService } from '../../core/services/deck.service';

@Component({
  templateUrl: 'questions.component.html'
})
export class QuestionsComponent {

  public questions;
  public decks;

  ngOnInit() {
    this.loadQuestions();
  }


  constructor(private questionService : QuestionService) { }

  loadQuestions() {

      this.questionService.find().subscribe(res => {
        this.questions = res;
      });

  }

}
