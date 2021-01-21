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


  constructor(private questionService : QuestionService, private deckService : deckService) { }

  loadQuestions() {

      this.questionService.find().subscribe(res => {
        this.questions = res;
      });

  }

  loadDecks() {

    this.deckService.find().subscribe(res => {
      this.decks = res;
    });

}

}
