import { Component } from '@angular/core';
import { DeckService } from '../../core/services/deck.service';
import { QuestionService } from '../../core/services/question.service';

@Component({
  templateUrl: 'flashcard.component.html'
})
export class FlashcardComponent {

  public flashcards;
  public questions;
  public start_date = false;


  ngOnInit() {

    this.loadQuestions();

  }


  constructor(private deckService : DeckService, private questionService : QuestionService) { }

  loadQuestions() {

      this.questionService.find().subscribe(res => {
        this.questions = res;
      });

  }

  public open(event, item) {
    alert('Open ' + item);
  }


}
