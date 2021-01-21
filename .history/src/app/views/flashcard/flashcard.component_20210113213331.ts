import { Component } from '@angular/core';
import { DeckService } from '../../core/services/deck.service';
import { QuestionService } from '../../core/services/question.service';

@Component({
  templateUrl: 'flashcard.component.html'
})
export class FlashcardComponent {

  public flashcards;
  public questions;
  public current_question;
  public current_position = 0;
  public start_date = '';
  public end_date = '';

  ngOnInit() {
    this.loadQuestions();
  }

  constructor(private deckService : DeckService, private questionService : QuestionService) { }

  loadQuestions() {

      this.questionService.find().subscribe(res => {
        this.questions = res;
      });

  }

  public start_game(event) {
    this.start_date = '2020-01-11';
    this.current_question = this.questions[this.current_position];
  }

  public next_question(event) {
    this.current_position += 1;
    this.start_game()
  }


}
