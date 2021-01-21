import { Component } from '@angular/core';
import { DeckService } from '../../core/services/deck.service';
import { QuestionService } from '../../core/services/question.service';

@Component({
  templateUrl: 'flashcards.component.html'
})
export class FlashcardsComponent {

  public flashcards;
  public questions;


  ngOnInit() {

    this.loadQuestions();

  }


  constructor(private deckService : DeckService, private questionService : QuestionService) { }

  loadQuestions() {

      this.questionService.find().subscribe(res => {
        this.questions = res;
      });

  }

}
